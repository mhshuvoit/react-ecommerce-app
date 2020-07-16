import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { ProductConsumer } from './Context'

// const SubCount = () => {
//     return (
//         <ProductConsumer>
//             {value => {
//                 if (value.cart.length === 0) {
//                     return null
//                 } else {
//                     return (
//                         <p className="subCount ml-auto">{value.subCount}</p>
//                     )
//                 }
//             }}
//         </ProductConsumer>
//     )
// }

const Navigation = () => {
    return (
        <Fragment>
            <Navbar bg="primary" expand="lg">
                <NavLink exact to="/"><Navbar.Brand style={{ color: "#ffffff" }}>React Ecommerce App</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ProductConsumer>
                        {value => {
                            return (
                                <Form inline style={{ marginLeft: "220px" }}>
                                    <FormControl style={{ width: "500px" }}
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-2"
                                        onChange={event => value.handleSearch(event.target.value)}
                                        value={value.searchTerm} />
                                </Form>
                            )
                        }}
                    </ProductConsumer>
                    <ProductConsumer>
            {value => {
                if (value.cart.length === 0) {
                    return null
                } else {
                    return (
                        <p className="subCount ml-auto">{value.subCount}</p>
                    )
                }
            }}
        </ProductConsumer>
                    <Nav className="ml-auto">
                        <NavLink className="navCart" exact to="/cart"><Nav.Link><i className="fas fa-cart-plus" /> Cart</Nav.Link></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Navigation