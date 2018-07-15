import { Popover } from 'antd';
import * as React from 'react';
import './Input.css';

interface IInput {
    width?: string;
    className?: string;
    placeholder?: string;
    name?: string;
    isIcon: boolean;
    isTitle?: boolean;
    isError?: boolean;
    tooltipContent?: string;
    inputtitle?: string;
    onChange?: any;
    value?: any;
}

class InputComponent extends React.Component<IInput, any> {
    constructor(props: IInput) {
        super(props);
    }
    public isIcon(item: boolean) {
        return (
            <i className='question-icon' />
        )
    }
    public isTitle(item: boolean) {
        return (
            <div className='input-title'>{this.props.inputtitle}</div>
        )
    }
    public isError() {
        return (
            <div/>
        )
    }

    public render() {
        let isIcon;
        let isTitle;
        let isError;
        if (this.props.isIcon) {
            isIcon = this.isIcon(this.props.isIcon);
        }
        if (this.props.isTitle) {
            isTitle = this.isTitle(this.props.isTitle);
        }
        if (this.props.isError) {
            isError = this.isError();
        } 
        // const isError = this.isError();
        return (
            <div className={`student-input-div ${this.props.className}`} style={{ width: `${this.props.width}` }}>
                {isTitle}                
                <input
                    placeholder={this.props.placeholder}
                    className='student-input'
                    type="text"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value} />
                <Popover trigger="click" content={this.props.tooltipContent}>
                    {isIcon}
                </Popover>
                {isError}
            </div>
        );
    }
}

export default InputComponent;