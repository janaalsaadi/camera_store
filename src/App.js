import React from "react";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import Product from "./containers/Product/Product";
import Cart from './containers/cart/Cart';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
      <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path="/product" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
          

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
