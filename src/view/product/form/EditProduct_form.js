
import React, { useState, useContext } from 'react'
import Nav from '../../../reusableComponents/NavComponent';
import { observer } from "mobx-react";
import { CardHeaderComponentEdit } from "../../../reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import Swal from "../../../reusableComponents/notification/Swal";

import ProductStore from '../../../store/ProductStore'
import { useDidMount } from '../../../utils/componentLifeCycle'

const initialState = {
  SKU: "",
  prdnm: "",
  prdImg01: "",
  Selprc: "",
  htmlDetail: "",
}
const EditProduct_form = observer((props) => {
  const store = useContext(ProductStore)
  const [state, setState] = useState(initialState)

  const _getProductDetail = () => {
    store.getProductDetail(props.match.params.id)
    setState({
      SKU: store.productDetail.SKU,
      prdnm: store.productDetail.prdnm,
      prdImg01: store.productDetail.prdImg01,
      Selprc: store.productDetail.Selprc,
      htmlDetail: store.productDetail.htmlDetail
    })
  }

  const _updateProductHandler = async () => {
    await store.updateProduct(props.match.params.id, state)
    await Swal.success('Berhasil di update')
    props.history.push('/')
  }

  const onChange = {
    SKU: (e) => (setState({ ...state, SKU: e.target.value })),
    prdnm: (e) => (setState({ ...state, prdnm: e.target.value })),
    Selprc: (e) => (setState({ ...state, Selprc: e.target.value })),
    htmlDetail: (e) => (setState({ ...state, htmlDetail: e.target.value }))
  }

  useDidMount(() => {
    _getProductDetail()
  })

  return (
    <>
      <Nav />
      <Container>
        <CardHeaderComponentEdit
          data={state} onClickUpdate={_updateProductHandler} onChange={onChange}
        />
      </Container>
    </>
  )
})

export default EditProduct_form
