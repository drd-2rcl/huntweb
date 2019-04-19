import React, { Component } from 'react';
import Axios from 'axios';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  componentDidMount() {
    this.loadProducts();
  }

  // quando utilizamos métodos que pertencem ao react utilizamos o modelo normal de named function, mas quando criamos uma função nossa precisa ser com Arrow Function para que a nossão função consiga enchergar o escopo da variável this, para que assim a função possa se referenciar a classe e acessar outros métodos e variáveis da classe;
  // async e await facilita a maneira de lidar com promises dentro do javascript (menos verboza)
  
  loadProducts = async (page = 1) => {
    const response = await Axios.get(`https://rocketseat-node.herokuapp.com/api/products?page=${page}`); 
    
    const { docs, ...productInfo } = response.data;
    
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if ( page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);

  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  render() {
    const { products, page, productInfo } = this.state;
    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a ref="">Acessar</a>
          </article>
        ))}
        <div className="actions" >
          <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage} >Próximo</button>
        </div>
      </div>
    )
  }
}