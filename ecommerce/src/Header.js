import React from 'react'

function Header() {
    return (
        <div className="header">
                <img  className="header__logo"
                    src="https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg"
                    alt=""
                />    

                <div className="header__searchInput">
                    <input  type="text"/>
                </div>   
                {/* {logo} */}

                <div className="headder__nav">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign in</span>                    
                    </div>

                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>   
                    </div>

                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>   
                    </div>

                </div>
                
         </div>
        
    )
}

export default Header
