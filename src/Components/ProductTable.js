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
       visibleProducts: [],
       colors: {"XS": "primary", "S": "primary", "M": "primary", "L": "primary", "XL": "primary"}
     };

     this.addToCart = this.addToCart.bind(this);
     this.clearCart = this.clearCart.bind(this);
     this.remove = this.remove.bind(this);
     this.selectFilter = this.selectFilter.bind(this);
   }

   addToCart(product) {
     if(!this.state.productsInCart.includes(product)){
     this.setState({productsInCart: [...this.state.productsInCart, product]})
    }
   }

   clearCart() {
     this.setState({productsInCart: []})
   }

   componentWillMount(){
     let selectedSizes = []
     let newArray = []
     for(var key in this.state.colors){
       if(this.state.colors[key] == "primary"){
         selectedSizes.push(key)
       }
     }
     this.props.products.forEach((prod) => {
       selectedSizes.map((size)=>{
       if(prod.availableSizes.includes(size) && !newArray.includes(prod)){
         newArray.push(prod)
       }
      }
      )

     })
     this.setState({visibleProducts: newArray})
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


   selectFilter(color){
     this.setState({visibleProducts: []})
     let newDict = this.state.colors
     if(newDict[color] == "secondary"){newDict[color] = "primary";}
     else{newDict[color] = "secondary"}
     let selectedSizes = []
     let newArray = []
     for(var key in this.state.colors){
       if(this.state.colors[key] == "primary"){
         selectedSizes.push(key)
       }
     }
     this.props.products.forEach((prod) => {
       selectedSizes.map((size)=>{
       if(prod.availableSizes.includes(size) && !newArray.includes(prod)){
         newArray.push(prod)
       }
      }
      )

     })
     this.setState({visibleProducts: newArray})
     this.setState({colors: newDict})

   }

  render() {
    return (
      <div style ={{alignItems: 'center'}}>
      <Cart removeItem = {this.remove} cartProds = {this.state.productsInCart} clear = {this.clearCart}/>
        <Row style = {{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={() => this.selectFilter("XS")} color = {this.state.colors["XS"]} style = {{margin: '10px'}}> XS </Button>
          <Button onClick={() => this.selectFilter("S")} color = {this.state.colors["S"]} style = {{margin: '10px'}}> S </Button>
          <Button onClick={() => this.selectFilter("M")} color = {this.state.colors["M"]} style = {{margin: '10px'}}> M </Button>
          <Button onClick={() => this.selectFilter("L")} color = {this.state.colors["L"]} style = {{margin: '10px'}}> L </Button>
          <Button onClick={() => this.selectFilter("XL")} color = {this.state.colors["XL"]} style = {{margin: '10px'}}> XL </Button>
        </Row>
      <Container>
      <Row>
        {this.state.visibleProducts.map(function(prod, i){
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
