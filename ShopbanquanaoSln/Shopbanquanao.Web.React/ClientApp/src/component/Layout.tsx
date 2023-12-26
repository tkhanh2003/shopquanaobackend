import * as React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./../component/Home";
import Header from "../sanpham/Header";
import Cart from "../cart/Cart";
import Single_product from "../sanpham/Single_product";
import { Provider } from "react-redux";
import store from "../reducer/store";
import AdminLogin from "../admin/login";
import AdminPage from "../admin/dashboard";
import AddProductPage from "../admin/add";
import EidtProductPage from "../admin/edit";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(store);
const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Single_product" element={<Single_product />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EidtProductPage />} />
      </Routes>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
