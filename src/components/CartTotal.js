import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'
import Paypal from './Paypal'

const CartTotal = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <ProductConsumer>
                        {value => {
                            if (value.cart.length === 0) {
                                return null
                            } else {
                                return (
                                    <Col lg={10} sm={8} className="text-right">
                                        <Link to="/"><Button className="mb-3" onClick={() => value.clearCart()} >Clear Cart</Button></Link>
                                        <p>Subtotal: ${value.subTotal}</p>
                                        <p>Tax: ${value.tax}</p>
                                        <p>Total: ${value.total}</p>
                                        <Paypal
                                            total={value.total}
                                            clearCart={value.clearCart}
                                            history={value.history} />
                                    </Col>
                                )
                            }
                        }}
                    </ProductConsumer>
                </Row>
            </Container>
        </Fragment>
    )
}

export default CartTotal