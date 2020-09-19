import React, { useState, useContext } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { observer } from "mobx-react";
import { ButtonComponent } from "../../../reusableComponents/Widgets";
import Swal from "../../../reusableComponents/notification/Swal";

import ProductStore from '../../../store/ProductStore'
const FormGetProductElevenia = observer(() => {
  const store = useContext(ProductStore)
  const [prdNo, setPrdNo] = useState("")

  const _getProductFromEleveniaHandler = async () => {
    const triggerGetPrdEleven = await store.getProductFromElevenia(prdNo)

    if (triggerGetPrdEleven.status >= 200)
      Swal.success(triggerGetPrdEleven.message)
    else
      Swal.failed(triggerGetPrdEleven.message)
  }

  return (
    <div class="col-md-12">
      <Form style={{ marginTop: '20px' }}>
        <Row>
          <Col sm={10}>
            <Form.Control onChange={(e) => setPrdNo(e.target.value)} placeholder="Masukkan Kode Produk yang akan ditarik" />
          </Col>
          <Col>
            <ButtonComponent
              color="warning"
              text="Tarik Produk"
              onClick={_getProductFromEleveniaHandler}
            />
          </Col>
        </Row>
      </Form>
    </div>
  )
})


export default FormGetProductElevenia