import { Icon } from 'antd';
import * as React from 'react';
import './PriceTable.css';

interface IPriceTable {
    pricetableParam: any;
}

class PriceTable extends React.Component<IPriceTable, any> {
    constructor(props: IPriceTable) {
        super(props);
    }
    public renderPriceTable(item: any) {
        return (
            item.map((doc: any, idx: any) => {
                return (
                    <div className='pricetable-row-detail' key={idx}>
                        <div className='pricetable-col-detail name'>{doc.roomName}</div>
                        <div className='pricetable-col-detail price'>{doc.price}</div>
                        <div className='pricetable-col-detail action'>
                            <span>
                                <Icon type="form" style={{ fontSize: 13, color: '#38b2a6', paddingRight: '5px' }} />
                                Edit
                            </span>
                        </div>
                    </div>
                )
            })
        )
    }
    public render() {
        const renderPriceTable = this.renderPriceTable(this.props.pricetableParam);
        return (
            <div className='pricetable'>
                <div className='pricetable-row-title'>
                    <div className='pricetable-col-title name'>Room name</div>
                    <div className='pricetable-col-title price'>Price(week)</div>
                    <div className='pricetable-col-title action'>Action</div>
                </div>
                {renderPriceTable}
            </div>
        );
    }
}

export default PriceTable;