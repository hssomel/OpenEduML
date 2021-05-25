import React from "react";
import axios from "axios";
import { CardElement } from "@stripe/react-stripe-js";
import { CARD_OPTIONS } from "./priceutils";
import "./styles.css";

export const CardField = ({ onChange }) => {
  return (
    <div className="FormRow">
      <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
  );
};

export const Field = ({ label, id, type, placeholder, required, autoComplete, value, onChange }) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

export const SuccessButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SuccessButton ${error ? "SuccessButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

export const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    {children}
  </div>
);

export const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}></button>
);

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/api/payments`,
  headers: {
    "Content-Type": "application/json",
  },
});
