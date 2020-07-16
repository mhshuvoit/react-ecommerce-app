import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Paypal from '../assets/img/footer/paypal.png'
import Visa from '../assets/img/footer/visa.png'
import Bkash from '../assets/img/footer/bkash.png'

const Footer = () => (
    <Fragment>
        <Row className="text-center footer">
            <Col lg={4} md={6} className="mt-3">
                <h5>Payment Methods</h5>
                <img style={{ width: '40px', margin: '0 10px' }} src={Paypal} alt="img" />
                <img style={{ width: '40px', margin: '0 10px' }} src={Visa} alt="img" />
                <img style={{ width: '40px', margin: '0 10px' }} src={Bkash} alt="img" />
            </Col>
            <Col lg={4} md={6} className="mt-3">
                <h5>International</h5>
                <p style={{ lineHeight: '7px', display: 'inline-block' }}>Bangladesh</p>
                <p style={{ lineHeight: '7px', display: 'inline-block', margin: '0 10px' }}>Pakistan</p>
                <p style={{ lineHeight: '7px', display: 'inline-block' }}>Sri Lanka</p>
            </Col>
            <Col lg={4} md={6} className="mt-3">
                <h5>Follow Us</h5>
                <i class="fab fa-facebook footerIcon" />
                <i class="fab fa-linkedin-in footerIcon" />
                <i class="fab fa-twitter-square footerIcon" />
            </Col>
        </Row>
    </Fragment>
)

export default Footer