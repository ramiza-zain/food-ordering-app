import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
    </Router>
  );
}
