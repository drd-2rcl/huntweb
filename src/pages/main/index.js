import React, { Component } from 'react';
import Axios from 'axios';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.loadProducts();
  }

  // quando utilizamos métodos que pertencem ao react utilizamos o modelo normal de named function, mas quando criamos uma função nossa precisa ser com Arrow Function para que a nossão função consiga enchergar o escopo da variável this, para que assim a função possa se referenciar a classe e acessar outros métodos e variáveis da classe;

  // async e await facilita a maneira de lidar com promises dentro do javascript (menos verboza)
  
  loadProducts = async () => {
    const response = await Axios.get('https://rocketseat-node.herokuapp.com/api/products');
    console.log(response.data.docs);
    this.setState({ products: response.data.docs })
  }

  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a ref={() => null}>Acessar</a>
          </article>
        ))}
      </div>
    )
  }
}