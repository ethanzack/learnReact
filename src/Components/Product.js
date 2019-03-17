import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-table/react-table.css'


class Product extends Component {
  constructor(props) {
     super(props);
     this.state = {
       modal: false,
       addedToCart: false,
       colors: {"XS": "secondary", "S": "secondary", "M": "secondary", "L": "secondary", "XL": "secondary"}
     };

     this.toggle = this.toggle.bind(this);
   }

   toggle() {
     let selectedSizes = []
     for(var key in this.state.colors){
       if(this.state.colors[key] == "primary"){
         selectedSizes.push(key)
       }
     }
     console.log(selectedSizes)

     if(selectedSizes.length != 0){
       this.setState({
       modal: !this.state.modal
     });
     this.props.add(this.props.prod.title, selectedSizes)
    }
   }

   selectFilter(color){
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
     this.setState({colors: newDict})

   }


  render() {
    return (
      <div style = {containerStyle}>
            <h4> {this.props.prod.title} </h4>
            <h6> {this.props.prod.currencyFormat}{this.props.prod.price}</h6>
            <div style = {{marginLeft: '20px'}}><Row>
            <h6> Available Sizes:   </h6>
            {this.props.prod.availableSizes.map((size, i) =>
              <Button onClick={() => this.selectFilter(size)} color = {this.state.colors[size]}>
                  <h6> {size} </h6>
              </Button>)

            }
            </Row>
            </div>
            <Button outline color="primary" style = {{textAlign: 'bottom'}} onClick={this.toggle}> Add to Cart </Button>
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
  backgroundColor: 'white'
}

export default Product;

// {this.props.products.map(function(prod, i){
//   return <p> {prod.image} </p>
// })}
