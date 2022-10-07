const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state, //we should return updated state + previous state....
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "INCR_QTY":
      return {...state,
        cart: [...state.cart.map((item)=> 
          item.id === action.payload.id ?
         {...item, 
          quantity : item.quantity + (item.quantity <10 ? 1: 0)}
           : item)
        ],
      };

    case "DECR_QTY":
      return {...state,
        cart: [...state.cart.map((item,index)=> 
          item.id === action.payload.id ?
          {...item,
             quantity : item.quantity - (item.quantity > 1 ? 1 : 0)}
              : item)
        ],
      };

    case "UPDATE_QUANTITY_IN_CART":
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) =>
            item.id === action.payload.id
              ? (item.quantity = action.payload.quantity)
              : item.quantity
          ),
        ],
      };

    // case 'GET_TOTAL':
    //   let {total_items,total_amount} ={ ...state.cart.reduce((acc,curValue) => {
    //     let {price, quantity} = curValue;
    //     acc.total_items += quantity;
    //     price = price * quantity;
    //     acc.total_amount += price;
        
    //     return acc;
    //   },
    //    { total_items: 0,total_amount:0 } 
    //   )}
    //   return{
    //     ...state,
    //       cart: [total_items,total_amount]
    //   }  

    default:
      return state;
  }
};

export default CartReducer;
