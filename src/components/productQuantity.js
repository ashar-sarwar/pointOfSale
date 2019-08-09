import React, { Component } from "react";
import { Button } from "reactstrap";

class ProductQuantity extends Component {
  // componentDidMount() {
  //     this.setState({ val: this.props.quantity })
  // }

  // increment = () => {
  //     // console.log('Inc: ', this.state.quantity)
  //     this.setState({ val: 1 + this.state.val })
  //     // console.log('Inc: ', this.state.val)
  //     this.props.handleSet(this.props.quantity + (this.state.val + 1))
  // }

  // decrement = () => {
  //     this.setState({ val: this.state.val - 1 })
  //     //  console.log('Dec: ', this.state.val)
  //     this.props.handleSet(this.props.quantity + (this.state.val - 1))

  // }

  render() {
    return (
      <React.Fragment>
        <td>
          <Button
            color="primary"
            className="btn-sm"
            onClick={() => this.props.handler(this.props.index, "increase")}
          >
            +
          </Button>
          {this.props.item.quantity}
          <Button
            color="primary"
            className="btn-sm"
            onClick={() => this.props.handler(this.props.index, "decrease")}
          >
            -
          </Button>
        </td>
      </React.Fragment>
    );
  }
}

export default ProductQuantity;
