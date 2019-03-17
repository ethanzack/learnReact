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
     this.removeFromCart = this.removeFromCart.bind(this);
   }

   toggle() {
     this.setState({
       modal: !this.state.modal
     });
   }

   removeFromCart(prod) {
     this.props.removeItem(prod)
   }


  render() {
    return (
      <div style = {cartStyle}>
        <Button color = "success" onClick={this.toggle} style = {{width: '100%'}}> View My Cart </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>MY CART</ModalHeader>
              <ModalBody>
                {this.props.cartProds.map((prod,i) =>
                  <Row key={i}>
                    <h5> {prod} </h5>
                    <Button style = {{marginLeft: '30px'}} color="danger" onClick={() => this.removeFromCart(prod)}>Remove Item</Button>
                  </Row>
                )}
              </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Check Out</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="danger" onClick={this.props.clear}>Clear Cart</Button>
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
