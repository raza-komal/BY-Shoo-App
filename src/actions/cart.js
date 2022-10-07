import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  INCR_QTY,
  DECR_QTY,
  UPDATE_CART,
} from "../constants/index.js";

export const addToCart = (product) => async (dispatch) => {
  try {
    await dispatch({ type: ADD_TO_CART, payload: product });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromCart = (id) => async (dispatch) => {
  try {
    await dispatch({ type: DELETE_FROM_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// export const updateCart = (id,quantity) => async (dispatch) => {
//   try {
//     await dispatch({ type: UPDATE_CART,payload: {
//         id,
//         quantity,
//       },});
//   } catch (error) {
//     console.log(error);
//   }
// };

export const increaseQuantity = (product) => async (dispatch) => {
  try {
    await dispatch({ type: INCR_QTY, payload: product });
  } catch (error) {
    console.log(error);
  }
};

export const decreaseQuantity = (product) => async (dispatch) => {
  try {
    await dispatch({ type: DECR_QTY, payload: product });
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
