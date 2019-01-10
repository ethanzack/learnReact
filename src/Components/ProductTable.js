import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Product from './Product.js'
import Cart from './Cart.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-table/react-table.css'


class ProductTable extends Component {
  render() {
    return (
      <div>
      <Cart />
      <Container>
      <Row>
        {this.props.products.map(function(prod, i){
          return <Col><Product prod = {prod} /></Col>
        })}
       </Row>
      </Container>
      </div>
    );
  }
}

export default ProductTable;

// {this.props.products.map(function(prod, i){
//   return <p> {prod.image} </p>
// })}
