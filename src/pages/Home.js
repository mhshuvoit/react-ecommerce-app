import React, { Fragment } from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => (
    <Fragment>
        <Navigation />
        <Banner />
        <Products />
        <Footer />
    </Fragment>
)
export default Home