import React from 'react'
import './Product.css'
import SimpleRating from './rating'

function Product() {
    return (
        <div className="Product">

           <div className="product_info">
               <p>The len startup</p>
               <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
               </p>

               <div className="product__rating">
                    <SimpleRating />
               </div>
               </div> 

               <img />
        </div>
    )
}

export default Product
