import * as React from 'react';
import PanelTitle from '../../component/PanelTitle/PanelTitle';
import PropetiesPanel from '../../component/propertiespanel/PropertiesPanel';

const propertiespanelParam = [
    { value: 'properties1', link: '/page/pagecomponet/edit/properties1' },
    { value: 'properties2', link: '/page/pagecomponet/edit/properties2' },
    { value: 'propertiesTest', link: '/page/pagecomponet/edit/propertiesTest' }
];
class Edit extends React.Component {
    public render() {
        return (
            <div className='studeng-panel'>
                <PanelTitle param="Edit Property" />
                <PropetiesPanel propertiespanelParam={propertiespanelParam} />
            </div>
        );
    }
}

export default Edit;