import React, { Component } from 'react';
import Tables from './table';

class POSTable extends Component {



    render() {
        // var messageBody = document.querySelector('#messageBody');
        // messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;


        const { columns, data, handler } = this.props
        console.log("pos: ", handler)
        return (

            <div className="panel-body-scroll" >
                <Tables columns={columns} data={data} handler={handler} />
            </div>

        );
    }
}

export default POSTable;