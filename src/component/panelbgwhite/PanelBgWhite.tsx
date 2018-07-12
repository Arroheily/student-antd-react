import * as React from 'react';
import './PanelBgWhite.css';

interface IPanelBgWhite {
    param: any;
}
class PanelBgWhite extends React.Component<IPanelBgWhite, any> {
    constructor(props: IPanelBgWhite) {
        super(props);
    }
    public render() {
        return (
            <div className='whitebg-panel'>
                <div className='whitebg-panel-title'>{this.props.param.title}</div>
                {this.props.children}
            </div>
        );
    }
}

export default PanelBgWhite;