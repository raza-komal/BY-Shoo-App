import React, { useState } from "react";
import "./card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,deleteFromCart } from "../../actions/cart";
import { Link,useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [products,setProducts] = useState(products);

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  // {product,quantity,price:product.price * quantity}

  const removeProduct = (id) => {
    dispatch(deleteFromCart(id));
  }


  // const openPost = () => {navigate(`/products/${cart.id}`)
// };
  return (
    <Card sx={{ maxWidth: 345 }} className="cardContainer">
      <Link className="links" to={`/products/${cart.id}`}>
      <CardMedia
        component="img"
        height="340"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/product/${product.id}`} className="links">
            {product.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          style={{ fontWeight: "bold" }}
        >
          $ {product.price}
        </Typography>
      </CardContent>
      </Link>
      <CardActions>
        {cart.find((prod) => prod.id === product.id) ? (
          <Button
            variant="danger"
            onClick={() => removeProduct(product.id)}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </Button>
        )}

       
      </CardActions>
    </Card>
  );
};

export default ProductCard;
