import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Paper, Box, TextField } from "@mui/material";

import "./form.css";

const CheckOut = () => {
  const state = useSelector((state) => state.cart);
  console.log(state);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="form">
      <Paper elevation={3} justifyContent='center'>
       <Box>
        <h3>Coming Sooon</h3>
       </Box>
     
      </Paper>
    </div>
  );
};

export default CheckOut;
