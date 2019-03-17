import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


class Products extends Component {
  render() {
    return (
      <Container>
        {this.props.products.map(function(prod, i){
          return <Col style = {containerStyle}>
                  <h4> {prod.title} </h4>
                  <h6> {prod.currencyFormat}{prod.price}</h6>
                  <Button style = {{textAlign: 'bottom'}}> Add to Cart </Button>
                  </Col>
        })}
        </Container>
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
  marginBottom: '150px'
}

export default Products;

// {this.props.products.map(function(prod, i){
//   return <p> {prod.image} </p>
// })}
