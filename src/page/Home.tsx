import { Icon, Menu } from 'antd';
import * as React from 'react';


class Home extends React.Component {
    public handleClick = (e: any) => {
        console.log('click ', e);
    }
    public render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256, minHeight: 610 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item><Icon type="profile" /><span>List</span></Menu.Item>
                <Menu.Item><Icon type="form" /><span>Edit</span></Menu.Item>
            </Menu>
        );
    }
}

export default Home;