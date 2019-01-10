import React, { Component } from 'react';
import data from './products.json'
import Products from './Components/Products.js'


class App extends Component {
  render() {
    return (
      <div>
        <Products products = {data.products} />
      </div>
    );
  }
}

export default App;
