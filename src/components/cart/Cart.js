import React, { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../actions/cart";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  console.log(state);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setTotalAmount(
      state.reduce(
        (acc, curValue) => acc + Number(curValue.price) * curValue.quantity,
        0
      )
    );
    setTotalQuantity(
      state.reduce((acc, curValue) => acc + Number(curValue.quantity), 0)
    );
  }, [state]);

  const clearALL = () => {
    dispatch(clearCart());
  };

  const removeProduct = (id) => {
    dispatch(deleteFromCart(id));
  };

  const increaseQty = (product) => {
    dispatch(increaseQuantity(product));
  };
  const decreaseQty = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const openForm = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="containerCart">
        <h3>Your Cart</h3>

        {totalQuantity > 0 ? (
          <>
            <h3>Your have {totalQuantity} items in your cart</h3>
            <Divider variant="inset" style={{ marginTop: "20px" }} />
            {state.map((item) => (
              <div className="cart-items" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-info">
                  <h4>{item.name}</h4>
                </div>

                <div className="add-minus-quantity">
                  <FiMinus className = "icons" onClick={() => decreaseQty(item)} />

                  <input type="text" placeholder={item.quantity} />

                  <BsPlus className = "icons" onClick={() => increaseQty(item)} />
                </div>

                <div className="price">
                  <p>$ {item.price} </p>
                </div>
                <div className="icons">
                  <DeleteIcon onClick={() => removeProduct(item.id)} />
                </div>
              </div>
            ))}

            <Divider />
            <div className="finalOutput">
              <Button
                type="button"
                disabled={state.length === 0}
                onClick={openForm}
              >
                Checkout
              </Button>
              <span className="total">Subtotal: {totalQuantity} Items</span>
              <span className="totalPrice">Total: $ {totalAmount} </span>
              <Button type="button" onClick={clearALL}>
                Clear Cart
              </Button>
            </div>
          </>
        ) : (
          <h3 className="lastItem">Empty Cart? Continue Shopping..</h3>
        )}
      </div>
    </>
  );
};

export default Cart;
