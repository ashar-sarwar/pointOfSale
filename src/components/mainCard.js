import React, { Component } from "react";
import POSTable from "./posTable";
import FooterTable from "./footerTable";
import ModalClass from "./modal";
import Payhead from "./payhead";
import swal from "sweetalert";
import {
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";
import { getItem, getItems } from "../services/itemsService";

class MainCard extends Component {
  state = {
    cart_Items: [],
    subTotal: 0,
    total: 0,
    discount: 0,
    tax: 0,
    text: "",
    modal: false
  };

  async componentDidMount() {
    const { data: cart_Items } = await getItems();
    console.log(cart_Items);
    cart_Items.forEach(element => {
      element.quantity = 1;
      element.Total = element.price * element.quantity;
    });
    this.setState({ cart_Items });

    const tax = (this.state.subTotal / 100) * 5;
    this.setState({ tax });
  }

  columns = [
    {
      content: cart_Items => (
        <button
          onClick={() => this.handleDelete(cart_Items)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    },

    {
      path: "name",
      label: "Item"
    },

    {
      path: "price",
      label: "Unitprice"
    },

    {
      path: "quantity",
      label: "Quantity"
    },

    {
      path: "Total",
      label: "Total"
    }
  ];

  handleReset = () => {
    this.setState({ cart_Items: [] });
    document.getElementById("view-input").focus();
  };

  handleAdd = async e => {
    if (e.keyCode === 13) {
      const cart_Items = [...this.state.cart_Items];
      try {
        const item = await getItem(this.state.text);
        console.log(item);

        if (!Object.keys(item).length) {
          throw Error;
        }
        console.log(item.price);
        const cart_item = {
          _id: item.id,
          Items: item.name,
          unitPrice: item.price,
          Quantity: 1,
          Total: item.price
        };

        cart_Items.push(cart_item);
        this.setState({ cart_Items, text: "" });
      } catch (ex) {
        alert("Item not found");
        this.setState({ cart_Items, text: "" });
      }
    }
  };

  handleDelete = item => {
    const cart_Items = this.state.cart_Items.filter(
      m => m.barcode !== item.barcode
    );
    this.setState({ cart_Items: cart_Items });
    console.log(this.state.cart_Items);
  };

  handleChange = ({ currentTarget: input }) => {
    console.log("hello");
    this.setState({ text: input.value });
  };

  handleToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    document.getElementById("view-input").focus();
  };

  handleQuantity = (index, type) => {
    console.log(index, type);

    const cart_Items = [...this.state.cart_Items];

    if (cart_Items[index].quantity === 1 && type === "decrease") {
      cart_Items.splice(index, 1);
    } else if (type === "increase") {
      cart_Items[index].quantity = cart_Items[index].quantity + 1;
      cart_Items[index].Total =
        cart_Items[index].quantity * cart_Items[index].price;
    } else if (type === "decrease") {
      cart_Items[index].quantity = cart_Items[index].quantity - 1;
      cart_Items[index].Total =
        cart_Items[index].quantity * cart_Items[index].price;
    }

    this.setState({ cart_Items });
  };

  hold = () => {
    console.log("HOLDDDDDDDDDDDDDDDD");
    swal({
      title: "Are you sure?",
      text: "Your will not be able to recover this imaginary file!",
      icon: "warning",

      confirmButtonClass: "btn-danger",
      button: "Yes, delete it!",
      closeModal: false
    }); //
    //     function () {
    //         swal("Deleted!", "Your imaginary file has been deleted.", "success");
    //     });
  };

  cal = () => {
    //return this.state.cart_Items.reduce((sum, item) => sum + (item.unitPrice * item.Quantity), 0);
    let subTotal = 0;
    this.state.cart_Items.forEach(item => {
      subTotal += item.price * item.quantity;
    });
    //  this.setState({ subTotal })
    const tax = subTotal * 0.05;
    //         return

    const payable = tax + subTotal;

    return { subTotal, tax, payable };
  };

  render() {
    const { length: count } = this.state.cart_Items;
    return (
      <React.Fragment>
        <Card fluid className="mt-3" id="cart_Items">
          <CardHeader className="panel-heading">
            <Row className="mt-10">
              {/* <Col lg="6">
                                <InputElement />
                            </Col> */}
              <Col lg="6">
                <Input
                  id="view-input"
                  placeholder="Enter your input"
                  type="string"
                  onKeyUp={this.handleAdd}
                  onChange={this.handleChange}
                  value={this.state.text}
                  autoFocus
                />
              </Col>
            </Row>
          </CardHeader>

          <POSTable
            columns={this.columns}
            data={this.state.cart_Items}
            handler={this.handleQuantity}
          />

          <FooterTable count={count} cal={this.cal()} />
          <CardFooter>
            <ModalClass
              buttonLabel="Pay"
              class="fa fa-coins"
              buttonclass="card-footer-item btn-lg rounded-0"
              color="success"
              modalClass=""
              modal={this.state.modal}
              toggle={this.handleToggle}
              top={<Payhead />}
            />

            <Button
              color="warning"
              onClick={this.hold}
              className="card-footer-item hold_btn btn-lg rounded-0"
            >
              <i className="fa fa-hand-paper"> </i>
              Hold{" "}
            </Button>

            <Button
              color="danger"
              onClick={this.handleReset}
              className="card-footer-item btn-lg rounded-0"
            >
              <i className="fa fa-ban"> </i>
              Cancel{" "}
            </Button>
          </CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}

export default MainCard;
