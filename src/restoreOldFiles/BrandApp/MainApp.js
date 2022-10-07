import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./navbar/TopBar";
import SignIn from "./signin/SignIn";
import Cart from "./cart/Cart";
import Container from "@mui/material/Container";
import HomePage from "./homepage/HomePage";
import {products} from "./products";
import SingleProduct from "./SingleProduct/SingleProduct"

const MainApp = () => {
  const [product,setProduct] =useState(products);
  console.log(product);

  return (
    <div>
      <Container>
       
        <BrowserRouter>
        <TopBar  />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  style={{ marginTop: "15rem" }}
                />
              }
            ></Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element = {<SingleProduct key={product.id} products={products} /> }/>
            <Route
            path="*"
            element={
              <main style={{margin:"200px", padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default MainApp;
