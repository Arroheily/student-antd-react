import Edit from '../page/pagecomponet/Edit';
import List from '../page/pagecomponet/List';
import MenuNode from './menuCore';

const menuRoot = MenuNode.CreateRoot('首页', '/', '');
// const demo = menuRoot.addSubMenu('Demo', '/demo', 'desktop');
menuRoot.addLeaf('List', '/page/pagecomponet/list', 'profile', List);
menuRoot.addLeaf('Edit', '/page/pagecomponet/edit', 'form', Edit);
export default menuRoot;