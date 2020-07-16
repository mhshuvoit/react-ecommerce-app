import React, { Fragment } from 'react'
import { ProductConsumer } from './Context'
import { Modal, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Modals = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          if (!value.modalOpen) {
            return null
          } else {
            return (
              <Modal show={value.modalOpen} onHide={value.closeModal}  className="text-center">
                <Modal.Header closeButton>
                  <Modal.Title>This item add to cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src={value.modalProduct.img} alt="img"/>
                <h5>{value.modalProduct.title}</h5>
                <h5>Price: ${value.modalProduct.price}</h5>
                <Link to="/"><Button style={{marginRight: "10px"}} onClick={()=> value.closeModal()}>Contiue shop</Button></Link>
                <Link to="/cart"><Button style={{marginLeft: "10px"}} onClick={()=> value.closeModal()}>Go to cart</Button></Link>
                  </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
            )
          }
        }}
      </ProductConsumer>
    </Fragment>
  )
}

export default Modals