import axios from 'axios';
import { baseurl } from '../constant.json';

export default {
  products: () =>
    axios.get(`${baseurl}/products`).then((products) => products.data),
};
