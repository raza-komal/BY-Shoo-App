import React, { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./cart.css";
import { CartState } from "../../../context/CartContext";


const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  const [total, setTotal] = useState();
  const [qty, setQty] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curValue) => acc + Number(curValue.price) * curValue.quantity,
        0
      )
    );
    setQty(cart.reduce((acc, curValue) => acc + Number(curValue.quantity), 0));
  }, [cart]);

  const clear=() => {}
  return (
    <>
      <div className="containerCart">
        <h3>Products Cart</h3>

        {cart.length > 0 ? (
          <>
            <h3>Your have {qty} items in your cart</h3>
            <Divider variant="inset" style={{ marginTop: "20px" }} />
            {cart.map((item) => (
              <div className="cart-items" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-info">
                  <h4>{item.name}</h4>
                </div>

                <div className="add-minus-quantity">
                  <FiMinus
                    onClick={(e) =>
                      dispatch({ type: "DECR_QTY", payload: item })
                    }
                  />

                  <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_QUANTITY_IN_CART",
                        payload: {
                          id: item.id,
                          quantity: e.target.value,
                        },
                      })
                    }
                  />

                  <BsPlus
                    onClick={(e) =>
                      dispatch({ type: "INCR_QTY", payload: item })
                    }
                  />
                </div>

                <div className="price">
                  <p>{item.price} </p>
                </div>
                <div className="icons">
                  <DeleteIcon
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  />
                </div>
              </div>
            ))}

            <Divider />
            <div className="finalOutput">
              <Button type="button" disabled={cart.length === 0}>
                Checkout
              </Button>
              <span className="total">Subtotal:  {qty} Items</span>
              <span className="totalPrice">Total:  {total} </span>
              <Button type="button" disabled={cart.length === 0} onClick={() =>
                      dispatch({ type: "CLEAR_CART"})}>
                Clear Cart
              </Button>
            </div>
          </>
        ) : (
          <h2>Your Cart Is empty....Add Items To Your Cart</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
