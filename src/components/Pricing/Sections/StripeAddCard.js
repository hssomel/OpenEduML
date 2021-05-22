import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  CardField,
  Field,
  SubmitButton,
  ErrorMessage,
  SuccessButton,
  api,
} from "../utils/StripeCard.component.js";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "../utils/styles.css";
// ----------------------------------------------------------------------------------->
const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardAdded, setCardAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });

  // EVENT HANDLERS
  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!stripe || !elements) return;
      if (error) {
        elements.getElement("card").focus();
        return;
      }
      if (cardComplete) setProcessing(true);
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      });
      setProcessing(false);
      if (payload.error) setError(payload.error);
      setLoading(true);
      const body = {
        payment: payload.paymentMethod,
        user: props.user,
      };
      const res = await api.post("/attachpayment", body);
      if (res.data.type === "StripeCardError")
        alert("There was an error with attaching your card! Please try again or contact support!");
      else setCardAdded(true);
      setLoading(false);
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  };

  return (
    <form className="Form" onSubmit={handleFormSubmit} style={{ backgroundColor: "" }}>
      <fieldset className="FormGroup21">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Your name"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="Your email"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="Phone number"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />
      </fieldset>
      <fieldset className="FormGroup21">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!loading && !cardAdded && (
        <SubmitButton processing={processing} error={error} disabled={!stripe}>
          ADD PAYMENT METHOD
        </SubmitButton>
      )}

      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress style={{ color: "#f6a4eb" }} />
        </div>
      )}

      {cardAdded && (
        <SuccessButton processing={processing} error={error} disabled={!stripe}>
          CARD SUCCESSFULLY ADDED <CheckCircleOutlineIcon />
        </SuccessButton>
      )}
    </form>
  );
};
// -------------------------------------------------------------------------------->
const App = ({ currentUser }) => {
  return (
    <div className="AppWrapper3">
      <CheckoutForm user={currentUser} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
