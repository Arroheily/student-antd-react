import * as React from 'react';
import { Link } from 'react-router-dom';
import './PropertiesPanel.css';

interface IPropertiesPanel {
    propertiespanelParam: any;
}
class PropertiesPanel extends React.Component<IPropertiesPanel, any> {
    constructor(props: IPropertiesPanel) {
        super(props);
    }
    public renderPropertiesPanel(item: any[]) {
        return (
            item.map((doc: any, idx: any) => {
                return (
                    <div key='propertiespanel_${idx}' className='properties-div'><Link to={doc.link}>{doc.value}</Link></div>
                )
            })
        )
    }
    public render() {
        const renderPropertiesPanel = this.renderPropertiesPanel(this.props.propertiespanelParam);
        return (
            <div className='properties-panel'>
                {renderPropertiesPanel}
            </div>
        );
    }
}

export default PropertiesPanel;