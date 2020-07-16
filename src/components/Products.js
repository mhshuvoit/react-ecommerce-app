import React, { Fragment } from 'react'
import { ProductConsumer } from './Context'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Modal from './Modal'

const Products = () => {
    return (
        <Fragment>
            <Container>
                <h1 className="text-center my-5">Our Products</h1>
                <Row>
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return (
                                    <Col lg={3} sm={6} className="mb-4">
                                        <Card>
                                            <Link to ="/details"> <Card.Img onClick={()=> value.handleDetail(product.id)} variant="top" src={product.img} /></Link>
                                            <Card.Body>
                                                <Button
                                                    disabled={product.inCart ? true : false}
                                                    onClick={() => {
                                                        value.addToCart(product.id)
                                                        value.openModal(product.id)
                                                    }}>
                                                    {product.inCart ? (
                                                        <p className="mb-0" disabled>In Cart</p>
                                                    ) : (
                                                        <i className="fas fa-cart-plus" />
                                                        )}
                                                </Button>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <p>{product.title}</p>
                                                    <p className="font-italic">
                                                        {`$${product.price}`}
                                                    </p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }}
                    </ProductConsumer>
                </Row>
            </Container>
            <Modal/>
        </Fragment>
    )
}

export default Products