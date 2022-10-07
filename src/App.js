import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TopNav from "./components/navbar/TopNav";
import Home from "./components/homepage/Home";

import Cart from "./components/cart/Cart";
import KidsProducts from "./components/AllProducts/KidsProducts/KidsProducts";
import MenProducts from "./components/AllProducts/MenProducts/MenProducts";
import WomenProducts from "./components/AllProducts/WomenProducts/WomenProducts";
import Footer from "./components/footer/Footer";
import CheckOut from "./components/checkout/CheckOut";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("./productdb.json");
      const items = await res.json();
      setProducts(items);
    };
    getProducts();
  }, []);

  const [kidProducts, setKidProducts] = useState([]);
  const kidItem = products.filter((item) => item.type === "kid");
  console.log(kidItem);
  useEffect(() => {
    setKidProducts(kidItem);
  }, []);

  return (
    <div>
      <Container>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/kids"
              element={<KidsProducts products={products} />}
            />
            <Route path="/men" element={<MenProducts products={products} />} />
            <Route
              path="/women"
              element={<WomenProducts products={products} />}
            />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/product/:id" element = {<SingleProduct key={products.id} products={products} /> }/> */}
            <Route
              path="*"
              element={
                <main style={{ margin: "200px", padding: "1rem" }}>
                  <p>There's nothing here!</p>
                  <Link className="links" to="/">
                    Back To Home
                  </Link>
                </main>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
