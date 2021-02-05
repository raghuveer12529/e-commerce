import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images.iphonephotographyschool.com/7179/1120/Panoramic-iPhone-Photos-4.jpg"
          alt=""
        />
        

        <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
        </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
      
    </div>
  );
}   

export default Checkout;
