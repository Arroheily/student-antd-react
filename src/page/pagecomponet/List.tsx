import * as React from 'react';
import PanelBgWhite from '../../component/panelbgwhite/PanelBgWhite';
import PanelTitle from '../../component/PanelTitle/PanelTitle';
import TableTwoPart from '../../component/tabletwopart/TableTwoPart';

const propertyPnelParam =
    [{
        propertyDetail: [
            { roomName: 'Cleveland Street room1', price: '£210' },
            { roomName: 'Cleveland Street room2', price: '£250' },
            { roomName: 'Cleveland Street room3', price: '£200' },
            { roomName: 'Cleveland Street room4', price: '£280' }
        ], title: 'Property1',
    },
    {
        propertyDetail: [
            { roomName: 'urbanest room1', price: '£210' },
            { roomName: 'urbanest room2', price: '£250' },
            { roomName: 'urbanest room3', price: '£200' },
            { roomName: 'urbanest room4', price: '£280' },
            { roomName: 'urbanest room5', price: '£280' }
        ], title: 'Property2',
    }
    ];
class List extends React.Component {
    constructor(props: any) {
        super(props);
    }
    public renderTittleTable(item: any) {
        return (
            <PanelBgWhite param={item}>
                <TableTwoPart param={item} />
            </PanelBgWhite>
        )
    }
    public mapTittleTable() {
        return (
            propertyPnelParam.map((doc: any, idx: any) => {
                return this.renderTittleTable(doc);
            })
        )
    }
    public render() {
        const mapTittleTable = this.mapTittleTable();
        return (
            <div className='studeng-panel'>
                <PanelTitle param="Property List" />
                {mapTittleTable}
            </div>
        );
    }
}

export default List;