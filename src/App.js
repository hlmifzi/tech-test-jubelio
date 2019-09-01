
import React, { Component } from 'react'
import './App.css'
import './scss/style.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./LandingPage";
import DetailProduct from "./view/product/view/DetailProduct";
import EditProduct from "./view/product/form/EditProduct_form";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/detailProduct/:id" component={DetailProduct} />
          <Route path="/editProduct/:id" component={EditProduct} />
        </Switch>
      </Router>
    )
  }
}


export default App
