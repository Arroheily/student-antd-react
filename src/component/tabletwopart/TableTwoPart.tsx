import * as React from 'react';
import './TableTwoPart.css';

// interface ITableTwoPart {
//     param: any;
// }
class TableTwoPart extends React.Component {
    // constructor(props: ITableTwoPart) {
    //     super(props);
    // }
    public render() {
        return (
            <div className='table-two-part'>
                <div>
                    <div className='table-two-part-row-title'>
                        <div className='title'>Room name</div>
                        <div className='title'><div>Price</div><div className='pre-week'>(per week)</div></div>
                        <div className='title'>Room name</div>
                        <div className='title'><div>Price</div><div className='pre-week'>(per week)</div></div>
                    </div>
                    <div>123</div>
                </div>
                <div>123</div>
            </div>
        );
    }
}

export default TableTwoPart;