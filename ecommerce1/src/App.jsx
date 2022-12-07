
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes,Switch, Link,  Navigate } from 'react-router-dom'
import React,{useState,useEffect} from "react";
import Pay from "./components/Stripe.js/Pay";
import Successful from "./components/Stripe.js/Successful";
import Navbar from "./components/Navbar";
const App = () => {
  const user=false;
  return(

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/> }></Route>
        <Route exact path="/products/:category" element={<ProductList/> }></Route>
        <Route  path="/product/:id" element={<Product/> }></Route>
        <Route exact path="/login" element={user?< Navigate to="/"/>:<Login/> }></Route>
        <Route exact path="/cart" element={user?< Navigate to="/"/>:<Cart/> }></Route>
        <Route exact path="/register" element={<Register/> }></Route>
      </Routes>
    </Router>
    
  //  <Home/>
  // <ProductList/>
  // <Product/>
  // <Register/>
  // <Login/>
  
  )
};

export default App;