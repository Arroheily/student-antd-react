import { Select } from 'antd';
import * as React from 'react';
import './Select.css';

const Option = Select.Option;
interface ISelects {
    // optionsParam: any;
    width: string;
}
class SelectS extends React.Component<ISelects, any> {
    constructor(props: ISelects) {
        super(props);
    }
    public handleChange(value: any) {
        console.log(`selected ${value}`);
    }
    public render() {
        return (
            <Select className='student-select' defaultValue="Property1" style={{ width: `${this.props.width}` }} onChange={this.handleChange}>
                <Option value="Property1">Property1</Option>
                <Option value="Property2">Property2</Option>
                <Option value="Property3">Property3</Option>
                <Option value="Property4">Property4</Option>
            </Select>
        );
    }
}

export default SelectS;