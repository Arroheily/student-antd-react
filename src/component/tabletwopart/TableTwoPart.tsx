import * as React from 'react';
import './TableTwoPart.css';

interface ITableTwoPart {
    param: any;
}
class TableTwoPart extends React.Component<ITableTwoPart, any> {
    constructor(props: ITableTwoPart) {
        super(props);
    }
    public renderTableDetail(item: any) {
        return (
            item.map((doc: any, idx: any) => {
                return (
                    <div key={idx} className='table-two-part-detail'>
                        <div className='table-two-part-item'>
                            <div className='table-two-part-name-price'>{doc.roomName}</div>
                            <div className='table-two-part-name-price'>{doc.price}</div>
                        </div>
                    </div>
                )
            })
        )
    }

    public render() {
        const renderTableDetail = this.renderTableDetail(this.props.param.propertyDetail);
        return (
            <div className='table-two-part'>
                <div>
                    <div className='table-two-part-row-title'>
                        <div className='title'>Room name</div>
                        <div className='title'><div>Price</div><div className='pre-week'>(per week)</div></div>
                        <div className='title'>Room name</div>
                        <div className='title'><div>Price</div><div className='pre-week'>(per week)</div></div>
                    </div>
                    {renderTableDetail}
                    {/* <div className='table-two-part-detail'>
                        <div className='table-two-part-item'>
                            <div className='table-two-part-name-price'>Room1</div>
                            <div className='table-two-part-name-price'>$250</div>
                        </div>
                        <div className='table-two-part-item'>
                            <div className='table-two-part-name-price'>Room2</div>
                            <div className='table-two-part-name-price'>$250</div>
                        </div>                        
                    </div> */}
                    {/* <div className='table-two-part-detail'>
                        <div className='table-two-part-item'>
                            <div className='table-two-part-name-price'>Room3</div>
                            <div className='table-two-part-name-price'>$250</div>
                        </div>
                    </div> */}
                    <div className='clearboth' />
                </div>
            </div>
        );
    }
}

export default TableTwoPart;