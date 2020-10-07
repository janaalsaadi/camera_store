import React from "react";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import Product from "./containers/Product/Product";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
      <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path="/product" exact component={Product} />
          

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
