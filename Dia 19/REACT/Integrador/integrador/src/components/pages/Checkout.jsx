import React from "react";

import Contact from "./Checkout-Parts/Contact";
import ShippingAddress from "./Checkout-Parts/ShippingAddress";
import ShippingMethod from "./Checkout-Parts/ShippingMethod";
import PaymentInfo from "./Checkout-Parts/PaymentInfo";

const Checkout = () => (
  <div className="CheckoutForm">
    <h1 className="Title">Complete your info!</h1>
    <Contact />
    <ShippingAddress />
    <ShippingMethod />
    <PaymentInfo />
  </div>
);



export default Checkout;
