import * as React from 'react';
import { Route } from 'react-router-dom';
import menuConfig from './menuConfig';

class MenuModule extends React.Component {
  public render() {
    const nodes = menuConfig.getMenuNodes().filter(x => x.isLeaf);
    return nodes.map(x =>
      <Route path={x.router} component={x.component} key={x.router} />);
  }
}

export default MenuModule;