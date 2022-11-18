import React from "react";

const ShippingAddress = () => (
  <fieldset style={fieldset}>
    <legend style={legend}>Shipping Address</legend>
    <div>
      <label for="shipping-address-first-and-last-name" />
      <input
        id="shipping-address-first-and-last-name"
        style={inputField}
        type="text"
        name="name"
        placeholder="First and Last Name"
        required
      />
      <label for="shipping-address-street-address" />
      <input
        id="shipping-address-street-address"
        style={inputField}
        type="text"
        name="street_address"
        placeholder="Street Address"
        required
      />
      <div>
        <label for="shipping-address-extended-address" />
        <input
          id="shipping-address-extended-address"
          style={halfInputField}
          type="text"
          name="extended_address"
          placeholder="Apt/Suite"
          required
        />
        <label for="shipping-address-company" />
        <input
          id="shipping-address-company"
          style={halfInputField}
          type="text"
          name="lastName"
          placeholder="Company"
          required
        />
      </div>
      <div>
        <label for="shipping-address-city-locality" />
        <input
          id="shipping-address-city-locality"
          style={cityInputField}
          type="text"
          name="locality"
          placeholder="City"
          required
        />
        <label for="shipping-address-state-region" />
        <input
          id="shipping-address-state-region"
          style={stateInputField}
          type="text"
          name="region"
          placeholder="State"
          required
        />
        <label for="shipping-address-postal-code" />
        <input
          id="shipping-address-postal-code"
          style={postalInputField}
          type="text"
          name="postal_code"
          placeholder="Zip Code"
          required
        />
      </div>
    </div>
  </fieldset>
);

const fieldset = {
  textAlign: "initial",
  marginBottom: "20px",
  paddingBottom: "15px"
};

const legend = {
  fontSize: "20px",
  textAlign: "initial"
};

const label = {
  display: "none"
};

const inputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "100%",
  marginBottom: "20px"
};

const halfInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  marginBottom: "20px",
  padding: "12px 20px",
  width: "50%"
};

const cityInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "41.6666666667%"
};

const stateInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "25%"
};

const postalInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "33.3333333333%"
};

export default ShippingAddress;
