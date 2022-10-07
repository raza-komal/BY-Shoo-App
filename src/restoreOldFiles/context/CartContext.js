import React, {createContext, useReducer, useContext} from "react";
import CartReducer from "./CartReducer";
import {products} from "../components/BrandApp /products"


const Cart = createContext();   //create a cart context


const Context = ({children}) => {
   const initialState = {
       products:products,
       cart:[],
   } 
    const [state,dispatch] = useReducer(CartReducer, initialState);
    return (
      <Cart.Provider value = {{state,dispatch}}> {children}</Cart.Provider>
    )
}

export default Context;


export const CartState = () => {
    return useContext(Cart);
}
