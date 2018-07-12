import * as React from 'react';
import PanelBgWhite from '../../component/panelbgwhite/PanelBgWhite';
import PanelTitle from '../../component/PanelTitle/PanelTitle';
import TableTwoPart from '../../component/tabletwopart/TableTwoPart';

const Property1PnelParam = { title: 'Property1' };
const Property2PnelParam = { title: 'Property2' };
class List extends React.Component {
    public render() {
        return (
            <div className='studeng-panel'>
                <PanelTitle param="Property List" />
                <PanelBgWhite param={Property1PnelParam}>
                <TableTwoPart />
                </PanelBgWhite>
                <PanelBgWhite param={Property2PnelParam}>222</PanelBgWhite>
            </div>
        );
    }
}

export default List;