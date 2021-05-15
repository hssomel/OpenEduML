import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import {
  CardField,
  Field,
  SubmitButton,
  ErrorMessage,
  ResetButton,
  api,
} from "../utils/StripeCard.component.js";
import "../utils/styles.css";
// ----------------------------------------------------------------------------------->
const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });

  React.useEffect(() => {
    console.log(props.user);
  }, []);
  // EVENT HANDLERS
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    if (error) {
      elements.getElement("card").focus();
      return;
    }
    if (cardComplete) setProcessing(true);
    //
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });
    setProcessing(false);
    // checking for transaction error
    if (payload.error) setError(payload.error);
    else setPaymentMethod(payload.paymentMethod);

    const body = {
      payment: payload.paymentMethod,
      user: props.user,
    };
    console.log(payload.paymentMethod.id);
    const res = await api.post("/makepayment", body);
    console.log("res = ", res);
  };

  const resetForm = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: "",
      phone: "",
      name: "",
    });
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we generated a PaymentMethod:{" "}
        {paymentMethod.id}
      </div>
      <ResetButton onClick={resetForm} />
    </div>
  ) : (
    <form className="Form" onSubmit={handleFormSubmit}>
      <fieldset className="FormGroup21">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
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
          placeholder="janedoe@gmail.com"
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
          placeholder="(941) 555-0123"
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
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pay $25
      </SubmitButton>
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
