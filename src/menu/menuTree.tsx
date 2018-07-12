import { Icon, Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import menuConfig from '../menu/menuConfig';
import MenuNode from '../menu/menuCore';
import '../menuStyle/menu.css';


class MenuTree extends React.Component {
    public renderMenuNode(node: MenuNode): any {
        if (node.isRoot) {
            const menuNodes = node.getNodesByLocation();
            const openKeys = menuNodes.filter(x => x.isSubMenu || x.isRoot).map(x => x.router);
            const selectKeys = menuNodes.filter(x => x.isLeaf).map(x => x.router);
            return <Menu mode='inline' key={node.router} selectedKeys={selectKeys} defaultOpenKeys={openKeys}>
                {node.children.map(x => this.renderMenuNode(x))}
            </Menu>;
        }

        const nameIcon = <span><Icon type={node.iconType} />{node.name}</span>;
        if (node.isSubMenu) {
            return <Menu.SubMenu key={node.router} title={nameIcon}>
                {node.children.map(x => this.renderMenuNode(x))}
            </Menu.SubMenu>;
        } else if (node.isLeaf) {
            return <Menu.Item key={node.router}>
                <Link to={node.router}>{nameIcon}</Link>
            </Menu.Item>
        }
    }    
    public render(){
        return this.renderMenuNode(menuConfig);
    }
}

export default MenuTree;