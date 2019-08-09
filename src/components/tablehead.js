import React, { Component } from 'react';
import TableBody from './tablebody';

class TableHeader extends Component {

    render() {
        const { columns } = this.props
        return (
            < React.Fragment>
                <thead >
                    <tr >
                        {columns.map(column =>
                            <th>{column.label}</th>)}
                    </tr>
                </thead>

            </React.Fragment>);
    }
}

export default TableHeader;