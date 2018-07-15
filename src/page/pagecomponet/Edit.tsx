import { Modal } from 'antd';
import * as React from 'react';
import AutoTitle from '../../component/autotitle/AutoTitle';
import Button from '../../component/button/Button';
import Input from '../../component/input/Input';
import PanelBgGrey from '../../component/panelbggrey/PanelBgGrey';
import PanelBgWhite from '../../component/panelbgwhite/PanelBgWhite';
import PanelTitle from '../../component/PanelTitle/PanelTitle';
import PriceTable from '../../component/pricetable/PriceTable';
import PropetiesPanel from '../../component/propertiespanel/PropertiesPanel';
import Select from '../../component/select/Select';
// import ToolTip from '../../component/tooltip/ToolTip';

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
// const optionsParam=[
//     {value: 'Property1', name: 'Property1'},
//     {value: 'Property2', name: 'Property2'},
//     {value: 'Property3', name: 'Property3'},
//     {value: 'Property4', name: 'Property4'},
//     {value: 'Property5', name: 'Property5'}
// ]
const Property1Param = { title: 'Price', className: 'student-floatL' };
const TooltipContentParam = 'Price are based with currency GBP';
interface IEdit {
    btnName?: string;
}
class Edit extends React.Component<IEdit, any> {
    constructor(props: IEdit) {
        super(props);
        this.state = { add_property_visible: false, edit_room_visible: false };
        this.clickFun = this.clickFun.bind(this);
        this.editRoom = this.editRoom.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.addProperty = this.addProperty.bind(this);
    }
    public addProperty() {
        this.setState({
            add_property_visible: true,
        });
    }
    public clickFun() {
        alert(123);
    }
    public handleOk() {
        this.setState({
            add_property_visible: false,
        });
    }
    public handleCancel() {
        this.setState({
            add_property_visible: false,
        });
    }
    public editRoom() {
        // this.setState({ edit_room_visible: true });
        return (
            <Modal okText='Save' cancelText='删除本条' title='Add Property' visible={this.state.edit_room_visible} >
                <Input width='100%' inputtitle='Room name' isTitle={true} isIcon={false} className='student-marginBottom' placeholder='Room name' />
                <Input width='100%' inputtitle='Price' isTitle={true} isIcon={false} className='student-marginBottom' placeholder='Price' />
            </Modal>
        )
    }
    public renderPropertyModal() {
        return <Modal okText='Save' title='Add Property' visible={this.state.add_property_visible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <AutoTitle param="Propety name" />
            <Select width='100%' />
            <div style={{ height: '40px' }} />
            <AutoTitle param="Price" />
            <PanelBgGrey>
                <div style={{ width: '100%' }}>
                    <Input width='75%' isIcon={false} className='student-marginBottom student-floatL' placeholder='Room name' />
                    <Input width='22%' isIcon={true} tooltipContent={TooltipContentParam} className='student-marginBottom student-floatR' placeholder='Price' />
                </div>
                <div className='clearboth' />
                <Button btnName='Add' onClick={this.clickFun} />
            </PanelBgGrey>
        </Modal>
    }
    public render() {
        const renderPropertyModal = this.renderPropertyModal();
        const editRoom = this.editRoom();
        return (
            <div className='studeng-panel'>
                <PanelTitle param="Edit Property" />
                <PropetiesPanel width='20%' propertiespanelParam={propertiespanelParam} />
                <div className='student-floatL' style={{ width: '80%' }}>
                    <PanelBgWhite param={Property1Param} >
                        <Button className='student-floatR add-property-btn' btnName='Add new property' onClick={this.addProperty} />
                        <div className='clearboth' />
                        <PriceTable pricetableParam={pricetableParam} onClick={this.editRoom} />
                        <PanelBgGrey>
                            <div style={{ width: '100%' }}>
                                <Input width='75%' isIcon={false} className='student-marginBottom student-floatL' placeholder='Room name' />
                                <Input width='22%' isIcon={true} tooltipContent={TooltipContentParam} className='student-marginBottom student-floatR' placeholder='Price' />
                            </div>
                            <div className='clearboth' />
                            <Button btnName='Add' onClick={this.clickFun} />
                        </PanelBgGrey>
                    </PanelBgWhite>
                </div>
                <div className='clearboth' />
                <div>ded</div>
                {/* Modal */}
                {renderPropertyModal}
                {editRoom}
            </div>
        );
    }
}

export default Edit;