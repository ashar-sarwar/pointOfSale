import React, { Component } from "react";
import ProductQuantity from "./productQuantity";

class TableBody extends Component {
  renderCell = (column, item) => {
    if (column.content) return column.content(item);

    return item[column.path];
  };

  render() {
    const { columns, data, handler } = this.props;
    console.log("Body: ", handler);

    const cols = columns.filter(
      column => column.path != "Total" && column.path != "quantity"
    );

    return (
      <React.Fragment>
        <tbody>
          {data.map((item, index) => (
            <tr>
              {cols.map(column => (
                <td>{this.renderCell(column, item)}</td>
              ))}
              <ProductQuantity item={item} index={index} handler={handler} />
              <td>{item.Total}</td>
            </tr>
          ))}
        </tbody>
      </React.Fragment>
    );
  }
}

export default TableBody;
