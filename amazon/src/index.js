import React from "react";
import ReactDOM from "react-dom";
import Header from "../../amazon/src/Header/Header";
import Banner from "./Banner/Banner";
import BodyProduct from "./Product/Product";
import Checkout from "./Checkout/Checkout";
import { useHistory } from "react-router";
import Thankyou from "./Thankyou/Thankyouseller"
import Pay from "./Payment/PaymentGateway";
import Thank from "./Payment/Thanks";
import Admin from "../src/Admin/Admin"
import Delivery from "../src/deliveryAddress/delivery";
import DropdownAdmin from "../src/Header/Dropdown"
import HeaderSeller from "../src/Header/HeaderSeller"
import Return from "../src/ReturnAndOrder.js/Return"
// import "./All.css";
import Login from "./Login/Login";
import LoginSeller from "../src/Login/Loginseller"
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// *********Stripe dependencies*****
// import 'bootstrap/dist/css/bootstrap.min.css'
const promise = loadStripe(
  "pk_live_51JfUL9SBuLC1QLc4qoQAoqlXiDkM9EQQTdFSPBnxbo7WnKbadRWn6n9wlUGTcB8ZhjN092qOaMSDr9tLRKaRkBGr00yHNC5Adc"
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/loginseller">
          <LoginSeller />
        </Route>

        <Route exact path="/">
          <Header />
          <DropdownAdmin />
          <Banner />
          <BodyProduct />
          <Footer />
        </Route>
        <Route exact path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
        <Route exact path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Pay />
          </Elements>
          <Footer />
        </Route>
        <Route exact path="/thanks">
          <Header />
          <Thank />
          <Footer />
        </Route>
        <Route exact path="/delivery">
          <Header />
          <Delivery />
          <Footer />
        </Route>
        <Route exact path="/admin">
          <HeaderSeller />
          <Admin />
          <Footer />
        </Route>
        <Route exact path="/Thankyou">
          <Header />
          <Thankyou />
          <Footer />
        </Route>
        <Route exact path="/returnandorder">
          <Header />
          <Return />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
