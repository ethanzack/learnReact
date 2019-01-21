import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-table/react-table.css'


class Cart extends Component {
  constructor(props) {
     super(props);
     this.state = {
       modal: false
     };

     this.toggle = this.toggle.bind(this);
   }

   toggle() {
     this.setState({
       modal: !this.state.modal
     });
   }


  render() {
    return (
      <div style = {cartStyle}>
        <Button color = "success" onClick={this.toggle} style = {{width: '100%'}}> View My Cart </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>MY CART</ModalHeader>
              <ModalBody>
                {this.props.cartItems.map((item, i) => {
                  return <div> {item} </div>
                })}
              </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Check Out</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const cartStyle = {
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  paddingBottom: '30px',
}

export default Cart;

// {this.props.products.map(function(prod, i){
//   return <p> {prod.image} </p>
// })}
