import React, { Component, Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { ButtonComponent } from './Widgets';
import { Link } from 'react-router-dom'

export default class NavComponent extends Component {
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                    <Link to="/">
                        <Navbar.Brand href="#home">Jubelio-Tech-Tes</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <ButtonComponent 
                                color="warning"
                                text="Login"
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
