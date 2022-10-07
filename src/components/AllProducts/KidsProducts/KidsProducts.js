import React,{useEffect, useState} from "react";
import "../../homepage/home.css";
import { Container, Grid, Box } from "@mui/material";
import ProductCard from "../../productCard/CardProduct";
const KidsProducts = ({ products }) => {
  
  const [kidProducts, setKidProducts] = useState([]);
  const kidItem = products.filter((item) => item.type === "kid");
  console.log(kidItem);
  useEffect(() => {
    setKidProducts(kidItem);
  }, []);
  return (
    <Container className="home">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {kidProducts.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductCard product={product} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default KidsProducts;
