import React, { Component } from 'react';
import data from './products.json'
import ProductTable from './Components/ProductTable.js'


class App extends Component {
  render() {
    return (
      <div style = {{backgroundColor: 'gray'}}>
        <ProductTable products = {data.products} />
      </div>
    );
  }
}

export default App;
