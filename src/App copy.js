
import React, { Component, Fragment } from 'react'
import Nav from './reusableComponents/NavComponent';
import './App.css'
import { TableComponent } from "./reusableComponents/Widgets";
import {
  Container,
} from 'react-bootstrap'
import ROOT_URL from './services/api/URLApi';

class App extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    // const getData = await ROOT_URL.get('user')
    // this.setState({data:getData.data})
    console.log('cwm')
    setTimeout(async () => {
      const getData = await ROOT_URL.get('user')
      this.setState({ data: getData.data })
      console.log('hasil')
    }, 3000)

  }
  render() {
    console.log('render')
    
    return (
      <Fragment>
        <Nav />
        <Container>
          <TableComponent
            data={this.state.data}
          />
        </Container>
      </Fragment>
    )
  }
}


export default App
