import * as React from 'react';
import './PanelTitle.css';

interface IPanelTitle {
    param: any;
}
class PanelTitle extends React.Component<IPanelTitle, any> {
    constructor(props: IPanelTitle) {
        super(props);
    }
    public render() {
        return (
            <div className='panel-title'>{this.props.param}</div>
        );
    }
}

export default PanelTitle;