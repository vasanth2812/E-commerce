import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/components/Header';
import HomePage from './modules/Home';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
