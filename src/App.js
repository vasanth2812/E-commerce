import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/components/Header';
import HomePage from './modules/Home';
import ProductsPage from './modules/Products';
import AboutPage from './modules/About';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={ProductsPage} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
