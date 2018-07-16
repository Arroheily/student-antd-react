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
// import Select from '../../component/select/Select';
// import ToolTip from '../../component/tooltip/ToolTip';

const pricetableParamproperties1 = [
    { roomName: 'roomname1', price: '$250', action: '1' },
    { roomName: 'roomname2', price: '$250', action: '2' },
    { roomName: 'roomname3', price: '$250', action: '3' },
];
const pricetableParamproperties2 = [
    { roomName: 'properties2roomname1', price: '$250', action: '1' },
    { roomName: 'properties2roomname2', price: '$250', action: '2' },
    { roomName: 'properties2roomname3', price: '$250', action: '3' },
];
const pricetableParamproperties3 = [
    { roomName: 'roomname11', price: '$250', action: '1' },
    { roomName: 'roomname21', price: '$250', action: '2' },
    { roomName: 'roomname31', price: '$250', action: '3' },
];
const pricetableParamproperties4 = [
    { roomName: 'roomname1d', price: '$250', action: '1' },
    { roomName: 'roomname2d', price: '$250', action: '2' },
    { roomName: 'roomname3d', price: '$250', action: '3' },
];
const propertiespanelParam = [
    { value: 'urbanest North Terrace', detail: pricetableParamproperties1, key: 0, current: 'GBP' },
    { value: 'urbanest Cleveland Street', detail: pricetableParamproperties2, key: 1, current: 'GBP' },
    { value: 'urbanest Quay Street', detail: pricetableParamproperties3, key: 2, current: 'GBP' },
    { value: 'urbanest Glebe', detail: pricetableParamproperties4, key: 3, current: 'GBP' },
    { value: 'urbanest Darlington', detail: pricetableParamproperties3, key: 4, current: 'GBP' },
    { value: 'Western Sydney University Village - Bankstown', detail: pricetableParamproperties2, key: 5, current: 'AUD' },
];
const Property1Param = { title: 'Price', className: 'student-floatL' };
const TooltipContentParam = 'Price are based with currency GBP';
interface IEdit {
    btnName?: string;
}
class Edit extends React.Component<IEdit, any> {
    constructor(props: IEdit) {
        super(props);
        this.state = {
            add_property_visible: false, // 添加modal
            edit_room_visible: false, // 编辑modal
            pricetableParam: propertiespanelParam[0].detail, // 当前显示的price和room
            currentSelectPerproty: 0, // 当前选中的property
            currentSelectRoom: 0, // 当前选中的room
            edit_property_price_add_room_input: '',
            edit_property_price_add_price_input: 0,
            add_property_name: '',
            edit_property_price_edit_room_input: '',
            edit_property_price_edit_price_input: '',

            // add_property_price_room_name: '',
            // add_property_price_input: '',
        };
        this.addPrice = this.addPrice.bind(this);
        this.editRoom = this.editRoom.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleEditOk = this.handleEditOk.bind(this);
        this.handleEditCancel = this.handleEditCancel.bind(this);
        this.addProperty = this.addProperty.bind(this);
        this.selectedPropertiesPanel = this.selectedPropertiesPanel.bind(this);
        this.onchangeAddRoomInput = this.onchangeAddRoomInput.bind(this);
        this.onchangeAddPriceInput = this.onchangeAddPriceInput.bind(this);
        this.addPropertyName = this.addPropertyName.bind(this);
        this.onchangeEditRoomPrice = this.onchangeEditRoomPrice.bind(this);
        this.onchangeEditRoomName = this.onchangeEditRoomName.bind(this);
    }
    public addProperty() {
        this.setState({
            add_property_visible: true,
        });
    }
    public addPrice() {
        if (this.state.edit_property_price_add_room_input.length > 0 &&
            this.state.edit_property_price_add_price_input.length > 0) {
            propertiespanelParam[this.state.currentSelectPerproty].detail.push({
                roomName: this.state.edit_property_price_add_room_input, price: this.state.edit_property_price_add_price_input, action: '3'
            });
        }
        this.setState({
            pricetableParam: propertiespanelParam[this.state.currentSelectPerproty].detail
        })
    }

    // 编辑room start
    public handleEditOk() {
        const editRoom = propertiespanelParam[this.state.currentSelectPerproty].detail[this.state.currentSelectRoom];
        editRoom.roomName = this.state.edit_property_price_edit_room_input;
        editRoom.price = this.state.edit_property_price_edit_price_input;
        this.setState({
            edit_room_visible: false,
        });
    }
    public handleEditCancel() {
        this.setState({
            edit_room_visible: false,
        });
    }
    public deleteItem(){
        this.setState({
            edit_room_visible: false,
        });
        propertiespanelParam[this.state.currentSelectPerproty].detail.splice(propertiespanelParam[this.state.currentSelectPerproty].detail.indexOf(propertiespanelParam[this.state.currentSelectPerproty].detail[this.state.currentSelectRoom]), 1);
    }

    public editRoom(e: any) {
        this.setState({
            edit_room_visible: true,
            currentSelectRoom: e.target.value,
            edit_property_price_edit_room_input: propertiespanelParam[this.state.currentSelectPerproty].detail[e.target.value].roomName,
            edit_property_price_edit_price_input: propertiespanelParam[this.state.currentSelectPerproty].detail[e.target.value].price,
        });
    }
    public onchangeEditRoomName(e: any) {
        this.setState({
            edit_property_price_edit_room_input: e.target.value,
        });
    }
    public onchangeEditRoomPrice(e: any) {
        this.setState({
            edit_property_price_edit_price_input: e.target.value,
        });
    }
    // 编辑room end

    public renderEditRoomModal() {
        return (
            <Modal okText='Save' cancelText='cancel' title='Edit room' visible={this.state.edit_room_visible}
                onOk={this.handleEditOk} onCancel={this.handleEditCancel} >
                <Input width='100%' inputtitle='Room name' isTitle={true} isIcon={false}
                    value={this.state.edit_property_price_edit_room_input}
                    onChange={this.onchangeEditRoomName} className='student-marginBottom' placeholder='Room name' />
                <Input width='100%' inputtitle='Price' isTitle={true} isIcon={false}
                    value={this.state.edit_property_price_edit_price_input}
                    onChange={this.onchangeEditRoomPrice} className='student-marginBottom' placeholder='Price' />
                <button onClick={this.deleteItem}>删除本条</button>
            </Modal>
        )
    }
    public selectedPropertiesPanel(e: any) {
        this.setState({
            pricetableParam: propertiespanelParam[e.target.value].detail,
            currentSelectPerproty: e.target.value,
        });
    }
    public onchangeAddRoomInput(e: any) {
        this.setState({
            edit_property_price_add_room_input: e.target.value,
        })
    }
    public onchangeAddPriceInput(e: any) {
        // alert(e.target.value);
        this.setState({
            edit_property_price_add_price_input: e.target.value,
        })
    }

    // add properties的dialog的元素的onchange函数
    public addPropertyName(e: any) {
        this.setState({
            add_property_name: e.target.value,
        })
    }
    public handleOk() {
        if (this.state.add_property_name.length > 0) {
            propertiespanelParam.push({ value: this.state.add_property_name, detail: [], key: propertiespanelParam.length++, current: 'AUD' })
        }
        this.setState({
            add_property_visible: false,
        });
    }
    public handleCancel() {
        this.setState({
            add_property_visible: false,
        });
    }
    // add properties的dialog的元素的onchange函数end

    public renderPropertyModal() {
        return <Modal okText='Save' title='Add Property' visible={this.state.add_property_visible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <AutoTitle param="Propety name" />
            <Input width='100%' isIcon={false} className='student-marginBottom' placeholder='Property name' onChange={this.addPropertyName} />
        </Modal>
    }
    public renderPanelBgGrey() {
        return (
            <PanelBgGrey>
                <div style={{ width: '100%' }}>
                    <Input width='75%' isIcon={false} onChange={this.onchangeAddRoomInput}
                        className='student-marginBottom student-floatL' placeholder='Room name' />
                    <Input width='22%' isError={true} isIcon={true} onChange={this.onchangeAddPriceInput}
                        tooltipContent={TooltipContentParam} className='student-marginBottom student-floatR' placeholder='Price' />
                </div>
                <div className='clearboth' />
                <Button btnName='Add' onClick={this.addPrice} />
            </PanelBgGrey>
        )
    }
    public render() {
        const renderPropertyModal = this.renderPropertyModal();
        const renderEditRoomModal = this.renderEditRoomModal();
        const renderPanelBgGrey = this.renderPanelBgGrey();
        return (
            <div className='studeng-panel'>
                <PanelTitle param="Edit Property" />
                <PropetiesPanel onClick={this.selectedPropertiesPanel} width='20%' propertiespanelParam={propertiespanelParam} />
                <PanelBgWhite param={Property1Param} >
                    <Button className='student-floatR add-property-btn' btnName='Add new property' onClick={this.addProperty} />
                    <div className='clearboth' />
                    <PriceTable pricetableParam={this.state.pricetableParam} onClick={this.editRoom} />
                    {renderPanelBgGrey}
                </PanelBgWhite>
                <div className='clearboth' />
                {renderPropertyModal}
                {renderEditRoomModal}
            </div>
        );
    }
}

export default Edit;