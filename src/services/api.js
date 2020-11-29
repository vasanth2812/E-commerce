import axios from 'axios';
import { baseurl } from '../constant.json';

export default {
  products: () =>
    axios.get(`${baseurl}/products`).then((products) => products.data),
  cartProducts: () =>
    axios.get(`${baseurl}/carts//user/2`).then((products) => products.data),
};
