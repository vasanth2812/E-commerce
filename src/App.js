import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './shared/components/Header';
import HomePage from './modules/Home';
import ProductsPage from './modules/Products';
import AboutPage from './modules/About';
import CartPage from './modules/CartProducts';
import Whishlist from './modules/Whishlist';
import './shared/styles/global.scss';
import { fetchCartProducts, fetchProducts } from './actions';

const App = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts()).catch(() => {
      setErrors(true);
    });

    dispatch(fetchCartProducts()).catch(() => {
      setErrors(true);
    });
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <div className="mg-top-17">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route
                path="/products"
                exact
                render={() => <ProductsPage errors={errors} />}
              />
              <Route path="/about" exact component={AboutPage} />
              <Route
                path="/Whishlist"
                exact
                render={() => <Whishlist errors={errors} />}
              />
              <Route
                path="/cart"
                exact
                render={() => <CartPage errors={errors} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
