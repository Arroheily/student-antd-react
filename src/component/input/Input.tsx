import * as React from 'react';
import './Input.css';

interface IInput {
    width?: string;
    className?: string;
    placeholder?: string;
    name?: string;
}

class Input extends React.Component<IInput, any> {
    constructor(props: IInput) {
        super(props);
    }
    public render() {
        return (
            <div className={this.props.className}>
                <input style={{ width: `${this.props.width}` }}
                    placeholder={this.props.placeholder}
                    className='student-input'
                    type="text"
                    name={this.props.name} />
            </div>
        );
    }
}

export default Input;