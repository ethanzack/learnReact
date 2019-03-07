import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Product from './Product.js'
import Cart from './Cart.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-table/react-table.css'


class ProductTable extends Component {
  constructor(props) {
     super(props);
     this.state = {
       cartList: []
     };
   }

   cartAdd = (prod) => {
     this.setState({cartList: [...this.state.cartList, prod.title]});
     console.log(this.state.cartList)
   }


  render() {
    const cartAdd = this.cartAdd
    const state = this.state
    return (
      <div>
      <Cart cartItems = {this.state.cartList}/>
      <Container>
      <Row>
        {this.props.products.map(function(prod, i){
          return <Col key = {i}><Product prod = {prod}
                               cartFunc = {() => cartAdd(prod)}
                               cartShirts = {state.cartList}/>
                 </Col>
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
