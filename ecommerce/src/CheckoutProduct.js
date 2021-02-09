import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeItem =()=>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        })
    }
    return (
        <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={image}/>
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {title}
                    </p>
                    <p className="checkoutProduct__price">
                        {price}
                    </p>
                    <p className="checkoutProduct__rating">
                        {rating}
                    </p>
                    <button onClick={removeItem}>Remove item</button>
                </div>
        </div>
    )
}

export default CheckoutProduct
