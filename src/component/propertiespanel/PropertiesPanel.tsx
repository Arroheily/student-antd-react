import * as React from 'react';
import './PropertiesPanel.css';

interface IPropertiesPanel {
    propertiespanelParam: any;
    width?: string;
}
class PropertiesPanel extends React.Component<IPropertiesPanel, any> {
    constructor(props: IPropertiesPanel) {
        super(props);
    }
    public renderPropertiesPanel(item: any[]) {
        return (
            item.map((doc: any, idx: any) => {
                return (
                    <div key='propertiespanel_${idx}' className='properties-div' style={{width:'100%'}}>{doc.value}</div>
                )
            })
        )
    }
    public render() {
        const renderPropertiesPanel = this.renderPropertiesPanel(this.props.propertiespanelParam);
        return (
            <div className='properties-panel' style={{width:`${this.props.width}`}}>
                {renderPropertiesPanel}
            </div>
        );
    }
}

export default PropertiesPanel;