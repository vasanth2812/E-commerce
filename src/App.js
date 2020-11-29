import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/components/Header';
import HomePage from './modules/Home';
import ProductsPage from './modules/Products';
import AboutPage from './modules/About';
import CartPage from './modules/CartProducts';
import Whishlist from './modules/Whishlist';
import './shared/styles/global.scss';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <div className="mg-top-17">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/products" exact component={ProductsPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/Whishlist" exact component={Whishlist} />
              <Route path="/cart" exact component={CartPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
