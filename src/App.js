import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import IntroPage from "./components/IntroPage/IntroPage";
import MarketPage from "./components/MarketPage/MarketPage";
import CartPage from "./components/CartPage/CartPage";
import Community from "./components/Community/Community";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/AdminPage/AdminPage";
import OrderConfirm from "./components/Others/OrderConfirm";

import './App.css';

import { useDispatch, useSelector } from 'react-redux'
import { loadDBProduct } from './actions';

// import Register from "./components/AdminPage/Auth/Register"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDBProduct())
  }, [])  

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/intro" element={<IntroPage />} />
        <Route exact path="/market" element={<MarketPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/orderconfirm" element={< OrderConfirm />} />

        {/* <Route exact path="/register" element={< Register />} /> */}
      </Routes>
      {/* <div className="pb-20"></div> */}
      <Footer />
    </>
  );
}

export default App;
