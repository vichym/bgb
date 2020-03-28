
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarToggler,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import route from '../route'

class Header extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Container>
                <Navbar className="navbar navbar-dark bg-dark">
                    <NavbarBrand tag={Link} to="/">Chat APP</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {route.map(p =>
                                <NavItem sm="4">
                                    <NavLink tag={Link} to={p.path}>{p.name}</NavLink>
                                </NavItem>)
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>

        );
    }
}


export default Header;