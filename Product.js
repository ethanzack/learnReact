import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-table/react-table.css'

// use sku for image name

class Product extends Component {
  constructor(props) {
     super(props);
     this.state = {
       modal: false,
     };

     this.toggle = this.toggle.bind(this);
   }

   toggle() {
     this.setState({
       modal: !this.state.modal,
     });

     if(this.props.cartShirts.includes(this.props.prod.title)){
       return
     }
     else {
       this.props.cartFunc()
     }

   }



  render() {
    return (
      <div style = {containerStyle}>
            <h4> {this.props.prod.title} </h4>
            <h6> {this.props.prod.currencyFormat}{this.props.prod.price}</h6>
            <img src={require(`../static/${this.props.prod.sku}_1.jpg`)} width={150} />
            <Button outline color="primary" style = {{textAlign: 'bottom', marginTop: '20px'}} onClick={this.toggle}> Add to Cart </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Success</ModalHeader>
                  <ModalBody>
                    <strong>{this.props.prod.title}</strong> has been added to your cart!
                  </ModalBody>
            </Modal>

      </div>
    );
  }
}

const containerStyle = {
  borderRadius: '5px',
  borderWidth: '1px',
  border: '2px solid black',
  padding: '20px',
  marginBottom: '100px',
  width: '300px',
  height: '400px',
  marginBottom: '50px',
  backgroundColor: 'white',
  alignItems: 'center',
  textAlign: 'center'
}

export default Product;

// {this.props.products.map(function(prod, i){
//   return <p> {prod.image} </p>
// })}
