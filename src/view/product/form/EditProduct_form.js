
import React, { Component, Fragment } from 'react'
import Nav from '../../../reusableComponents/NavComponent';
import { inject, observer } from "mobx-react";
import { CardHeaderComponentEdit } from "../../../reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import Swal from "../../../reusableComponents/notification/Swal";


@inject('store')
@observer

class EditProduct_form extends Component {

  state = {
    SKU: "",
    prdnm: "",
    Selprc: "",
    htmlDetail: "",
  }

  async componentWillMount() {
    try {
      await this.props.store.getProductDetail(this.props.match.params.id)
      this.setState({
        SKU: this.props.store.productDetail.SKU,
        prdnm: this.props.store.productDetail.prdnm,
        prdImg01: this.props.store.productDetail.prdImg01,
        Selprc: this.props.store.productDetail.Selprc,
        htmlDetail: this.props.store.productDetail.htmlDetail
      })
    } catch (e) {
      Swal.failed(e.message)
    }
  }

  _updateProductHandler = async () => {  
    try {
      await this.props.store.updateProduct(this.props.match.params.id, this.state)
      await Swal.success('Selamat Datang Di Jubelio')
      this.props.history.push('/')
    } catch (e) {
      Swal.failed(e.message)
    }
  }

  sstSend = {
    SKU: (e) => (this.setState({ SKU: e.target.value })),
    prdnm: (e) => (this.setState({ prdnm: e.target.value })),
    Selprc: (e) => (this.setState({ Selprc: e.target.value })),
    htmlDetail: (e) => (this.setState({ htmlDetail: e.target.value }))
  }

  render() {  
    return (
      <Fragment>
        <Nav />
        <Container>
          <CardHeaderComponentEdit
            data={this.state} onClickUpdate={this._updateProductHandler} sstSend={this.sstSend}
          />
        </Container>
      </Fragment>
    )
  }
}


export default EditProduct_form
