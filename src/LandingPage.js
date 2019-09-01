
import React, { Component, Fragment } from 'react'
import Nav from './reusableComponents/NavComponent';
import { CarouselSkeleton } from "./reusableComponents/WidgetCarousel/carousel";
import './App.css'
import { inject, observer } from "mobx-react";
import { CardComponent } from "./reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import FormGetProductElevenia from "./view/product/form/FormGetProductElevenia"
import Swal from "./reusableComponents/notification/Swal";


@inject('store')
@observer

class App extends Component {

  state = {
    data: []
  }

  async componentDidMount() {
    try {
      this.props.store.getProduct()
      Swal.success('Selamat Datang Di Jubelio')
    } catch (e) {
      Swal.failed(e.message)
    }
  }

  render() {
    const store = this.props.store

    return (
      <Fragment>
        <Nav />
        <CarouselSkeleton datas={store.carousel} />
        <Container>
          <FormGetProductElevenia/>
          <CardComponent
            // data={this.state.data}
            data={store.product}
          />
        </Container>
      </Fragment>
    )
  }
}


export default App
