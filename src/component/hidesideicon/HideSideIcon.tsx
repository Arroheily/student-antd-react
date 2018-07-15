import { Icon } from 'antd';
import * as React from 'react';
import './HideSideIcon.css';


class HideSideIcon extends React.Component {

    public render() {
        return (
            <div className='side-hide'>
                <Icon type="left" />
            </div>
        )
    }
}

export default HideSideIcon;