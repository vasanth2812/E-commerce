import axios from 'axios';
import { baseurl, userid } from '../constant.json';

export default {
  products: () => axios.get(`${baseurl}/products`).then((res) => res.data),
  cartProducts: () =>
    axios
      .get(`${baseurl}/carts/user/${userid}`)
      .then((res) => res.data[0].products),
  addCart: (data) =>
    axios
      .post(`${baseurl}/carts`, {
        data,
      })
      .then((res) => res.data),
};
