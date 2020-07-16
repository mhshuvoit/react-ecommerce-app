import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { ProductConsumer } from './Context'

const Details = () => {
    return (
        <Fragment>
            <Container>
                <h1 className="text-center my-5">It's parfect for you</h1>
                <ProductConsumer>
                    {value => {
                        return (
                            <Row>
                                <Col lg={6} sm={6}>
                                    <img src={value.detailProduct.img} alt="img" />
                                </Col>
                                <Col lg={6} sm={6}>
                                    <h2>{value.detailProduct.title}</h2>
                                    <h5>Made by: {value.detailProduct.company}</h5>
                                    <p>Price: ${value.detailProduct.price}</p>
                                    <p>Details: {value.detailProduct.info}</p>
                                    <Link to="/"><Button style={{marginRight: "10px"}} >Home</Button></Link>
                                    <Button style={{marginLeft: "10px"}} onClick={() => {
                                        value.openModal(value.detailProduct.id)
                                        value.addToCart(value.detailProduct.id)
                                    }}>Add to cart</Button>
                                </Col>
                            </Row>
                        )
                    }
                    }
                </ProductConsumer>
            </Container>
            <Modal />
        </Fragment>
    )
}
export default Details