import * as React from 'react';
import './Button.css';

interface IPanelBgWhite {
    btnName: string;
    onClick: any;
    className?: string;
}
class Button extends React.Component<IPanelBgWhite, any> {
    constructor(props: IPanelBgWhite) {
        super(props);
    }
    public render() {
        return (
            <div className={`student-btn ${this.props.className}`} onClick={this.props.onClick}>{this.props.btnName}</div>
        );
    }
}

export default Button;