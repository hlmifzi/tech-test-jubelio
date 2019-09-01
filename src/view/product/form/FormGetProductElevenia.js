import React, { Component } from 'react'
import { Form,Row,Col } from 'react-bootstrap'
import { inject, observer } from "mobx-react";
import { ButtonComponent } from "../../../reusableComponents/Widgets";
import Swal from "../../../reusableComponents/notification/Swal";

@inject('store')
@observer

class FormGetProductElevenia extends Component {
    state = {
      prdNo : ""
    }

    _getProductFromEleveniaHandler = async () => {
      try {
        const triggerGetPrdEleven  = await this.props.store.getProductFromElevenia(this.state.prdNo)
        if (triggerGetPrdEleven.status >= 200) {
          Swal.success(triggerGetPrdEleven.message)
        } else {
          Swal.failed(triggerGetPrdEleven.message)
        }
      } catch (error) {
        Swal.failed('gagal mendapatkan data')
      }
    }

    render() {
        return (
            <div class="col-md-12">
            <Form style={margin}>
              <Row>
                <Col sm={10}>
                  <Form.Control onChange={(e)=>(this.setState({prdNo:e.target.value}))} placeholder="Masukkan Kode Produk yang akan ditarik" />
                </Col>
                <Col>
                  <ButtonComponent
                    color="warning"
                    text="Tarik Produk"
                    onClick={this._getProductFromEleveniaHandler}
                  />
                </Col>
              </Row>
            </Form>
          </div>
        )
    }
}


const margin = { marginTop: '20px' }

export default FormGetProductElevenia