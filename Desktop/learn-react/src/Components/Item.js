import React, { Component } from 'react';
import data from '../products.json'

class Item extends Component {
  render() {
    return (
      <div>
        <h1> HOMEPAGE </h1>
        <Products products = {data.products}>
      </div>
    );
  }
}

export default Item;
