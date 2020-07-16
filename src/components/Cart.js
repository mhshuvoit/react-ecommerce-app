import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductConsumer } from './Context'
import CartTotal from './CartTotal'

const Cart = () => (
    <Fragment>
        <Container className="text-center">
            <h1 className="my-5">Your Cart</h1>
            <ProductConsumer>
                {value => {
                    if (value.cart.length === 0) {
                        return <h3>Your cart is currently empty</h3>
                    } else {
                        return (
                            <Container className="mb-5">
                                <Row>
                                    <Col>IMAGE</Col>
                                    <Col>NAME</Col>
                                    <Col>PRICE</Col>
                                    <Col>QUANTITY</Col>
                                    <Col>REMOVE</Col>
                                    <Col>TOTAL</Col>
                                </Row>
                                <div style={{ marginBottom: "40px" }}>
                                    {value.cart.map(item => (
                                        <Row>
                                            <Col><img style={{ width: '90px' }} src={item.img} alt="img" /></Col>
                                            <Col>{item.title}</Col>
                                            <Col>${item.price}</Col>
                                            <Col>
                                                <span className="btn btn-black" onClick={() => value.decrement(item.id)}>-</span>
                                                <span className="btn btn-black">{item.count}</span>
                                                <span className="btn btn-black" onClick={() => value.increment(item.id)}>+</span>
                                            </Col>
                                            <Col><i style={{ cursor: "pointer" }} onClick={() => value.removeItem(item.id)} className="fas fa-trash" /></Col>
                                            <Col>${item.total}</Col>
                                        </Row>
                                    ))}
                                </div>
                            </Container>
                        )
                    }
                }}
            </ProductConsumer>
        </Container>
        <CartTotal/>
    </Fragment>
)

export default Cart