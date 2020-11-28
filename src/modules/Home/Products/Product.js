import React, { useEffect, useState } from 'react';
import { offerProducts } from '../../../constant.json';
import ProductCard from '../../../shared/components/ProductCard';
import SkeletonProduct from '../../../shared/components/Skeleton/SkeletonProduct';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => setProducts(offerProducts), 5000);
  }, [products]);

  const productList = products.map((product) => (
    <div key={product.id} className="col-sm-12 col-md-4 col-lg-3 col-xs-3">
      <ProductCard data={product} />
    </div>
  ));

  const skeletonProductList = [...Array(4)].map((i) => (
    <div key={i} className="col-sm-12 col-md-4 col-lg-3 col-xs-3">
      <SkeletonProduct />
    </div>
  ));

  return (
    <div className="row">
      <>{products && products.length ? productList : skeletonProductList}</>
    </div>
  );
};

export default Product;
