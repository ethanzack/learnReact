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
       productsInCart: [],
     };

     this.addToCart = this.addToCart.bind(this);
     this.clearCart = this.clearCart.bind(this);
     this.remove = this.remove.bind(this);
   }

   addToCart(product) {
     if(!this.state.productsInCart.includes(product)){
     this.setState({productsInCart: [...this.state.productsInCart, product]})
    }
   }

   clearCart() {
     this.setState({productsInCart: []})
   }

   remove(prod) {
     let newArray = []
     for(let i = 0; i < this.state.productsInCart.length; i++){
       if(this.state.productsInCart[i]!=prod){
         newArray.push(this.state.productsInCart[i])
       }
     }
     this.setState({productsInCart: newArray})
   }

  render() {
    return (
      <div>
      <Cart removeItem = {this.remove} cartProds = {this.state.productsInCart} clear = {this.clearCart}/>
      <Container>
      <Row>
        {this.props.products.map(function(prod, i){
          return <Col><Product prod = {prod} add = {this.addToCart}/></Col>
        },this)
       }
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
