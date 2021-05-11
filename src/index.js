import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK_KEY}`);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Elements>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
