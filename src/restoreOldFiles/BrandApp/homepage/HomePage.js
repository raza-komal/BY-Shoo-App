import React from "react";
import "./home.css";
import ProductCard from "../../BrandApp /productCard/ProductCard";
import { Container, Grid, Box } from "@mui/material";
import { products } from "../products";
const HomePage = () => {
  // console.log(product)

  return (
    <Container className="home">
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductCard product={product} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* {/* {products.map((product, index) => (
        <Grid item xs={4}>
          <ProductCard product={product} key={index} />
        </Grid> }))} */}
    </Container>
  );
};

export default HomePage;
