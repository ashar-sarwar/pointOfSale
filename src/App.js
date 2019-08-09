import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarMenu from './components/navbar';
import MainCard from './components/mainCard';
import Calbody from './components/calBody';
import { Container } from "reactstrap";
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/notfound';

class App extends Component {

  render() {
    return (

      <Container fluid className="bg-secondary">
        <NavbarMenu />

        <Switch>

          {/* //  <Route path="/card-tab" render={() => <Calbody name="Card" />} /> */}

          {/* <Route path="/#cash-tab" exact component={Calbody} /> */}
          {/* <Route path="/#discount-tab" render={() => <Calbody name="Discount" />} />
          <Route path="/#cash-tab" render={() => <Calbody name="Cash" />} /> */}
          <Route path="/not-found" component={NotFound} />
          <Route path="/" component={MainCard} />

          <Redirect to="/not-found" />
        </Switch>



      </Container>

    );
  }
}

export default App;