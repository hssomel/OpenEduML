import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { CARD_OPTIONS } from "./priceutils";
import "./styles.css";

const CardField = ({ onChange }) => {
  return (
    <div className="FormRow">
      <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
  );
};

export default CardField;
