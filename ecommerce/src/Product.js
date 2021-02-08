import React from "react";
import "./Product.css";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import { useStateValue } from './StateProvider'

function Product({id, title, price, image, rating }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{parseInt(price)}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarBorderRoundedIcon />
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
