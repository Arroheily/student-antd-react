import * as React from 'react';
import './AutoTitle.css';

interface IAutoTitle {
    param: any;
}
class AutoTitle extends React.Component<IAutoTitle, any> {
    constructor(props: IAutoTitle) {
        super(props);
    }
    public render() {
        return (
            <div className='auto-panel-title'>{this.props.param}</div>
        );
    }
}

export default AutoTitle;