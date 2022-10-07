import React from "react";
import "./home.css";
import { Container, Grid, Box, Item } from "@mui/material";
import ProductCard from "../productCard/CardProduct";

const HomePage = ({ products }) => {
  // console.log(product)

  return (
    <Container className="home">
      <Box sx={{ flexGrow: 2 }}>
        <Grid container alignItems="stretch" spacing={3} className="cards">
        {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4}lg={4}>
              <ProductCard product={product} key={index} />
            </Grid>
          ))} 
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;

/* 
          
          
          <Grid item xs={6} md={8}>
            <h2>xs=6 md=8</h2>
          </Grid>
          <Grid item xs={6} md={4}>
            <h2>xs=6 md=4</h2>
          </Grid>
          <Grid item xs={6} md={4}>
            <h2>xs=6 md=4</h2>
          </Grid>
          <Grid item xs={6} md={8}>
            <h2>xs=6 md=8</h2>
          </Grid>
          */
