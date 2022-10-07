import React from "react";
import "./card.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { CartState } from "../../../context/CartContext";




const ProductCard =({product}) => {

  const {state:{cart}, 
  dispatch } =  CartState(); //to manipulate state}= 

    return(
        <Card sx={{ maxWidth: 345 }} className="cardContainer">
        <CardMedia
          component="img"
          height="340"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to= {`/product/${product.id}`} className="links">{product.name}</Link>
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.primary" style={{fontWeight: "bold"}}>
            $ {product.price}
          </Typography>
        </CardContent>
        <CardActions>
        {
            cart.find((prod) => prod.id === product.id) ? 
            (
          <Button variant="danger"
            onClick = {()=> dispatch({type:"REMOVE_FROM_CART" , payload:product})}
          >Remove From Cart</Button>
            )
            :
            (<Button size="small" onClick={()=> dispatch({type:"ADD_TO_CART" , payload:product})} >Add to Cart</Button>)}
          
          {/* <Button size="small" onClick= {()=>
          dispatch({type:'REMOVE_FROM_CART',payload:product})
          } >Remove from Cart</Button> */}
        </CardActions>
      </Card>
    )
}

export default ProductCard;