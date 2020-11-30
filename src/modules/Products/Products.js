import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonProduct from '../../shared/components/Skeleton/SkeletonProduct';
import ProductCard from '../../shared/components/ProductCard';
import Alert from '../../shared/components/Alerts/Alert';
import { errorMessage, userid } from '../../constant.json';
import Filter from './Filter';
import helper from '../../shared/helper';
import { allproductsSelector } from '../../reducers/products';
import './Products.scss';
import api from '../../services/api';
import { addCart } from '../../actions';
import { allCartProductsId } from '../../reducers/cartProducts';

const Products = ({ errors }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [carterror, setCartError] = useState(false);

  const stateProductList = useSelector((state) => allproductsSelector(state));
  const stateCartProducts = useSelector((state) => allCartProductsId(state));

  console.log(stateCartProducts);

  useEffect(() => {
    setProducts(stateProductList);
  }, [stateProductList]);

  const addWhislist = (id) => {
    const data = {
      userId: userid,
      products: [
        {
          productId: id,
          quantity: 1,
        },
      ],
    };
    api
      .addCart(data)
      .then(() => {
        dispatch(addCart(data.products));
      })
      .catch(() => {
        setCartError(true);
      });
  };
  const sort = (sortValue) => {
    const sortProducts = helper.sort(products, 'price', sortValue);
    setProducts(() => [...sortProducts]);
  };

  const productList = products.map((product) => {
    return (
      <div
        key={product.id}
        className="col-sm-12 col-md-4 col-lg-3 col-xs-3 mg-bottom-10"
      >
        <ProductCard
          data={product}
          addWhislist={addWhislist}
          addedToCart={stateCartProducts.includes(product.id.toString())}
        />
      </div>
    );
  });

  const skeletonProductList = [...Array(20)].map((i) => (
    <div key={i} className="col-sm-12 col-md-4 col-lg-3 col-xs-3 mg-bottom-10">
      <SkeletonProduct />
    </div>
  ));

  return (
    <>
      <div className="section-container">
        {(errors || carterror) && <Alert title={errorMessage} color="danger" />}
        <>
          {!!products.length && (
            <div className="mg-top-20 mg-bottom-20">
              <Filter sort={sort} />
            </div>
          )}
        </>
        <div className="row">
          <>{products && products.length ? productList : skeletonProductList}</>
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  errors: PropTypes.bool.isRequired,
};

export default Products;
