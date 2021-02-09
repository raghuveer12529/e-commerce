export const initialState = {
    basket:[],
};

//Selector 
export const getBasketTotal = (basket)=>{
   var  value = 0;
    for(var i=0; i<basket.length; i++){
        value += basket[i].price;
    }
    return value;
}
    // basket.reduce((amount,item,index) =>  item.price + amount, 0);



const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET" : 
        return{
            ...state,
            basket: [...state.basket ,action.item]
        };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);

                let newBasket =  [...state.basket];

                if(index >= 0){
                    newBasket.splice(index,1);
                }else{
                    console.warn(`Cant remove product (id : ${action.id} as its not in basket)`)
                }

                return{
                    ...state,
                    basket: newBasket
                }

        default : 
        return state;
    }
}

export default reducer;