import * as React from 'react';
import './App.css';
import Body from './menu/Body';
import Header from './menu/Header';

import { Layout, Row } from 'antd';

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Row>
          <Header />
        </Row>
        <Row>
          <Body />
        </Row>
      </Layout>
    );
  }
}

export default App;