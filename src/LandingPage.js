
import React, { useContext } from 'react'
import Nav from './reusableComponents/NavComponent';
import { CarouselSkeleton } from "./reusableComponents/WidgetCarousel/carousel";
import './App.css'
import { observer } from 'mobx-react'

import { CardComponent } from "./reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import FormGetProductElevenia from "./view/product/form/FormGetProductElevenia"
import ProductStore from './store/ProductStore'
import { useDidMount } from './utils/componentLifeCycle'

const App = observer(() => {
  const { getProduct, product, carousel } = useContext(ProductStore)

  useDidMount(() => {
    getProduct()
  })

  return (
    <>
      <Nav />
      <CarouselSkeleton datas={carousel} />
      <Container>
        <FormGetProductElevenia />
        <CardComponent
          data={product}
        />
      </Container>
    </>
  )
})
export default App
