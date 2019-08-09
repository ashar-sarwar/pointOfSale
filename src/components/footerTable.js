import React, { Component } from "react";

class FooterFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      subtotal: 0,
      tax: 0
    };
  }
  render() {
    const { count, tax, total, cal } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{`Product Count(${count})`}</td>
          <td>{`Subtotal        ${cal.subTotal}`}</td>
        </tr>
        <tr>
          <td>{`VAT(5%)   ${cal.tax}`}</td>
        </tr>
        <tr>
          <td>Discount</td>
        </tr>
        <tr>
          {" "}
          <td>{`Payable   ${cal.payable}`}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default FooterFile;
