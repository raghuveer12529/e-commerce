import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://wallpapercave.com/wp/wp2060641.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="HUF"
            price={19}
            image="https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg"
            rating={2}
          />
          <Product
            title="HUF"
            price={19}
            image="https://picsum.photos/200"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            title="HUF"
            price={19}
            image="https://picsum.photos/536/354"
            rating={4}
          />
          <Product
            title="HUF"
            price={19}
            image="https://picsum.photos/id/536/354"
            rating={5}
          />
          <Product
            title="HUF"
            price={19}
            image="https://picsum.photos/seed/picsum/536/354"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            title="HUF"
            price={19}
            image="https://picsum.photos/535/354"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
