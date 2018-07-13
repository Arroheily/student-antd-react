import * as React from 'react';
import Button from '../../component/button/Button';
import Input from '../../component/input/Input';
import PanelBgGrey from '../../component/panelbggrey/PanelBgGrey';
import PanelBgWhite from '../../component/panelbgwhite/PanelBgWhite';
import PanelTitle from '../../component/PanelTitle/PanelTitle';
import PriceTable from '../../component/pricetable/PriceTable';
import PropetiesPanel from '../../component/propertiespanel/PropertiesPanel';

const propertiespanelParam = [
    { value: 'properties1' },
    { value: 'properties2' },
    { value: 'propertiesTest' },
    { value: 'propertiesTest' },
    { value: 'propertiesTest' },
    { value: 'propertiesTest' },
];
const pricetableParam = [
    { roomName: 'roomname1', price: '$250', action: '1' },
    { roomName: 'roomname2', price: '$250', action: '2' },
    { roomName: 'roomname3', price: '$250', action: '3' },
];
const Property1Param = { title: 'Price' };
class Edit extends React.Component {
    constructor(props: any) {
        super(props);
        this.clickFun = this.clickFun.bind(this);
    }
    public clickFun() {
        alert(123);
    }
    public render() {
        return (
            <div className='studeng-panel'>
                <PanelTitle param="Edit Property" />
                <PropetiesPanel width='20%' propertiespanelParam={propertiespanelParam} />
                <div className='student-floatL' style={{ width: '80%' }}>
                    <PanelBgWhite param={Property1Param} >
                        <PriceTable pricetableParam={pricetableParam} />
                        <PanelBgGrey>
                            <Input className='student-marginBottom student-floatL' placeholder='Room name' />
                            <div className='clearboth' />
                            <Button btnName='Add' onClick={this.clickFun} />
                            <div>123</div>
                        </PanelBgGrey>
                    </PanelBgWhite>
                </div>
                <div className='clearboth' />
                <div>ded</div>
            </div>
        );
    }
}

export default Edit;