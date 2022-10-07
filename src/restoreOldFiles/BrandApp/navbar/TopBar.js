import React, { useState, useEffect } from "react";
import "./nav.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CartState } from "../../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const TopBar = () => {
  const {
    state: { cart },
  } = CartState();
  const [qty, setQty] = useState();

  useEffect(() => {
    setQty(cart.reduce((acc, curValue) => acc + Number(curValue.quantity), 0));
  }, [cart]);

  return (
    <div className="nav">
      <div className="brandLogo">
        <Link className="links" to="/">
          {" "}
          <h2>Kommerce Store</h2>
        </Link>
      </div>

        <Link className="links" to="/men">
          Men
        </Link>
        <Link className="links" to="/men">
          Women
        </Link>
        <Link className="links" to="/men">
          Kids
        </Link>

      <div className="navLinks">
        <Link className="links" to="/signin">
          <Button size="medium">Sign In</Button>
        </Link>

        {cart.length > 0 ? (
          <>
            <Link className="links" to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={qty} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </>
        ) : (
          <>
            <Link className="links" to="/cart">
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
