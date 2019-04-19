import React, { Component } from 'react'
import Axios from 'axios';

import './styles.css'
 
class Product extends Component {
  state = {
    product: {}
  }
  
  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await Axios.get(
      `https://rocketseat-node.herokuapp.com/api/products/${id}`
    ); 

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url} target="_blank" >{product.url}</a>
        </p>
      </div>
    )
  }
}

export default Product
