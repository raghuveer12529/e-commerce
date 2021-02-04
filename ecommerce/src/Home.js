import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container"> 
                <img 
                 className="home__image"
                 src="https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg"
                 alt=""
                 />

                 <div className="home__row">
                    <Product />
                 </div>

                 <div className="home__row">

                </div>

                <div className="home__row">

                </div>

            </div>
            
        </div>
    )
}

export default Home
