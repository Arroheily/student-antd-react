import { Layout } from 'antd';
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
            </Sider>
            <Layout>
                <MenuModule />
            </Layout>
        </Layout>
    </BrowserRouter>;
}

export default Body;