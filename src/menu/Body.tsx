import { Layout } from 'antd';
// import HideSideIcon from '../../src/component/hidesideicon/HideSideIcon';
import MenuModule from './menuModule';
import MenuTree from './menuTree';


import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

const { Sider } = Layout;

const Body = () => {
    return <BrowserRouter>
        <Layout>
            <Sider style={{ width: '50px' }}>
                <MenuTree />
                {/* <HideSideIcon /> */}
            </Sider>
            <Layout>
                <MenuModule />
            </Layout>
        </Layout>
    </BrowserRouter>;
}

export default Body;