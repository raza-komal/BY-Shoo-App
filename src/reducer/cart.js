const initialState = {
  cart: [],
};
const reducers = (state = initialState, action) => {
  let cart = state.cart;
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    // return [...state, { ...action.payload, quantity: 1 }];

    case "DELETE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    //Increment quantity

    case "INCR_QTY":
     return state.map((item) => item.id === action.payload.id ?
      {...item, quantity: item.quantity + (item.quantity <10 ? 1: 0)}
      : item);

    case "DECR_QTY":
      return state.map((item) => item.id === action.payload.id ?
      {...item, quantity: item.quantity - (item.quantity > 1 ? 1: 0)}
      : item);

    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.quantity = action.payload.quantity)
            : item.quantity
        ),
      };
    default:
      return cart;
  }
};

export default reducers;


   // let item = cart.find((item) => item.id === action.payload.id);
      // let updatedCart = cart.filter((item) => item.id !== action.payload.id);
      // item.quantity = action.payload.quantity;
      // updatedCart.push(item);
      // return {
      //   ...state,
      //   cart: updatedCart,
      // };
