import React, { Component } from 'react';
import { Table } from "reactstrap";
import TableHeader from './tablehead';
import TableBody from './tablebody';

const Tables = props => {

    const { columns, data, handler} = props

console.log("table: ",handler)
    return (
        <Table >
            <TableHeader columns={columns} />
            <TableBody data={data} columns={columns} handler={handler} />


        </Table>
    );

}

export default Tables;