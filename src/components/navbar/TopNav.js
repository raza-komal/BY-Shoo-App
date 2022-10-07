import React, { useState, useEffect } from "react";
import "./nav.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const TopNav = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [qty, setQty] = useState();

  useEffect(() => {
    setQty(cart.reduce((acc, curValue) => acc + Number(curValue.quantity), 0));
  }, [cart]);
  return (
    <div className="nav">
      <div className="brandLogo">
        <Link className="links" to="/">
          {" "}
          <h2>BY-Shooo</h2>
        </Link>
      </div>
     <div className="navRoute">
     <Link className="links" to="/kids">
        Kids
      </Link>
      <Link className="links" to="/men">
        Men
      </Link>
      <Link className="links" to="/women">
        Women
      </Link>
     </div>

      <div className="navLinks">
        {/* <Link className="links" to="/signin">
          <Button size="medium">Sign In</Button>
        </Link> */}

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

export default TopNav;
