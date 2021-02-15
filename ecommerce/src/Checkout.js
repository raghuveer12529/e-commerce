import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images.iphonephotographyschool.com/7179/1120/Panoramic-iPhone-Photos-4.jpg"
          alt=""
        />
        

        <div>
            <h3>{user?.email}</h3>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {basket.map(item => (

            <CheckoutProduct 
                id = {item.id}
                title = {item.title}
                image = {item.image}
                rating = {item.rating}
            />
            ))}
        </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
      
    </div>
  );
}   

export default Checkout;
