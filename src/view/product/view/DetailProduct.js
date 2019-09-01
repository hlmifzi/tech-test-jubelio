
import React, { Component, Fragment } from 'react'
import Nav from '../../../reusableComponents/NavComponent';
import { inject, observer } from "mobx-react";
import { CardHeaderComponent } from "../../../reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import Swal from "sweetalert2";


@inject('store')
@observer

class DeatilProduct extends Component {

  state = {
    data: []
  }

  async componentWillMount() {    
    try {
      this.props.store.getProductDetail(this.props.match.params.id)
    } catch (e) {
      Swal.failed(e.message)
    }
  }

  _deleteProductHandler = async () => {
    try {      
     
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
             let action = this.props.store.updateProduct(this.props.match.params.id,{'is_active':'N'})
            Swal.fire(
              'Deleted!',
               action.message,
              'success'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })

        setTimeout(() => {  
          this.props.history.push('/')
        }, 3000)
        
    } catch (e) {
      Swal.failed(e.message)
    }
  }

  _editProductHandler = async () => {
    this.props.history.push(`/editProduct/${this.props.match.params.id}`)
  }
  render() {
    const store = this.props.store

    return (
      <Fragment>
        <Nav />
        <Container>
          <CardHeaderComponent
            data={store.productDetail} 
            onClickDelete={this._deleteProductHandler}
            onClickEdit={this._editProductHandler}
          />
        </Container>
      </Fragment>
    )
  }
}


export default DeatilProduct
