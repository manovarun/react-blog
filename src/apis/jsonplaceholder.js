import axios from 'axios';

const jsonplaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default jsonplaceholder;
