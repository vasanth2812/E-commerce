import React from 'react';
import IndexContainer from '../../shared/components/IndexContainer';
import Carousel from './Carousel';
import Product from './Products';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="section-container">
        <IndexContainer title="DEALS OF THE DAY">
          <Product />
        </IndexContainer>
        <IndexContainer title="TRENDING">
          <Product />
        </IndexContainer>
      </div>
    </>
  );
};

export default Home;
