// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Shopping App</h1>
        <div className="content">
          <div className="product-list">
            <ProductList />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
