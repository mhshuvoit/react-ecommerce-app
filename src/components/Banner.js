import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import p1 from '../assets/img/banner/product-1.webp'
import p2 from '../assets/img/banner/product-2.webp'
import p3 from '../assets/img/banner/product-3.webp'
import p4 from '../assets/img/banner/product-4.webp'

const Banner = () => (
    <Fragment>
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={p1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={p2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={p3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={p4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    </Fragment>
)

export default Banner