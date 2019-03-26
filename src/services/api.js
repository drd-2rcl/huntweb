import Axios from 'axios';

const api = Axios.create({ 
  baseUrl: 'https://rocketseat-node.herokuapp.com/api' 
});

export default api;