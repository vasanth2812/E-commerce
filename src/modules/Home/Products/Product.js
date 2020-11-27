import React, { useEffect, useState } from 'react';
import data from '../../../constant.json';
import ProductCard from '../../../shared/components/ProductCard';
import SkeletonProduct from '../../../shared/components/Skeleton/SkeletonProduct';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { offerProducts } = data;
    setTimeout(() => setProducts(offerProducts), 5000);
  }, [products]);

  const productList = products.map((product) => (
    <div className="col-sm-12 col-md-4 col-lg-3 col-xs-3">
      <ProductCard data={product} key={product.id} />
    </div>
  ));

  const skeletonProductList = [1, 2, 3, 4].map((i) => (
    <div className="col-sm-12 col-md-4 col-lg-3 col-xs-3">
      <SkeletonProduct key={i} />
    </div>
  ));

  return (
    <div className="row">
      <>{products && products.length ? productList : skeletonProductList}</>
    </div>
  );
};

export default Product;
