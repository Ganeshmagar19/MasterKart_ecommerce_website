import { createContext, useReducer } from "react";

export const CartContext=createContext();

const initialState={
    cart:[],
}

const reducer =(state,action)=>{
    switch(action.type){

        case "ADD_TO_CART":return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        case 'Remove':
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id !==action.payload.id)
            }
      default:
               return state;  
    }
}


export const Cartprovider =({children}) =>{
   

    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}