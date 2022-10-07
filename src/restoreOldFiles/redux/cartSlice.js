import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    quantity:0,
    total:0
  },

  reducers: {
      addToCart:(state, action) => {
          state.cart.push(action.payload.product);
          state.quantity +=1;
          state.total+= action.payload.price * action.payload.quantity;
      },

      removeFromCart:(state, action) => {
        state.cart.pop(action.payload);
        state.quantity -=1;
        state.total+= action.payload.price * action.payload.quantity;


      },

      clear:(state)=>{
        state = state.cart = [];
      },
    
  },
});

export const {addToCart, removeFromCart, clear} = cartSlice.actions;
export default cartSlice.reducer;