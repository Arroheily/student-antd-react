import * as React from 'react';
import './PanelBgGrey.css';

// interface IPanelBgGrey {
//     param: any;
// }
class PanelBgGrey extends React.Component {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className='greybg-panel'>
                {this.props.children}
            </div>
        );
    }
}

export default PanelBgGrey;