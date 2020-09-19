
import React, { useContext } from 'react'
import Nav from '../../../reusableComponents/NavComponent';
import { observer } from "mobx-react";
import { CardHeaderComponent } from "../../../reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import Swal from "sweetalert2";
import ProductStore from '../../../store/ProductStore'
import { useDidMount } from '../../../utils/componentLifeCycle'


const DeatilProduct = observer((props) => {
  const { getProductDetail, updateProduct, productDetail } = useContext(ProductStore)

  const _getProductDetail = async () => {
    await getProductDetail(props.match.params.id)
  }

  const _deleteProductHandler = () => {
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
          let action = updateProduct(props.match.params.id, { 'is_active': 'N' })
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
        props.history.push('/')
      }, 3000)

    } catch (e) {
      Swal.failed(e.message)
    }
  }

  const _editProductHandler = () => {
    props.history.push(`/editProduct/${props.match.params.id}`)
  }

  useDidMount(() => {
    _getProductDetail()
  })

  return (
    <>
      <Nav />
      <Container>
        <CardHeaderComponent
          data={productDetail}
          onClickDelete={_deleteProductHandler}
          onClickEdit={_editProductHandler}
        />
      </Container>
    </>
  )
})

export default DeatilProduct
