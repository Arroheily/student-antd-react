import * as React from 'react';
// import Button from '../button/Button';
import './PanelBgWhite.css';

interface IPanelBgWhite {
    param: any;
}
class PanelBgWhite extends React.Component<IPanelBgWhite, any> {
    constructor(props: IPanelBgWhite) {
        super(props);
    }
    // public renderBtn() {
    //     return (
    //         <Button btnName='Add' onClick= {this.props.param.onClick} />
    //     )
    // }
    public render() {
        // let renderBtn;
        // if(this.props.param.isButton){
        //     renderBtn= this.renderBtn();
        // }
        return (
            <div className='whitebg-panel'>
                <div className={`whitebg-panel-title ${this.props.param.className}`}>{this.props.param.title}</div>
                {/* {renderBtn} */}
                {/* <div className='clearboth' /> */}
                {this.props.children}
            </div>
        );
    }
}

export default PanelBgWhite;