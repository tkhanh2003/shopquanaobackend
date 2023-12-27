
import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./component/Home";
import Header from "./sanpham/Header";
import Cart from "./cart/Cart";
import Single_product from "./sanpham/Single_product";
import AdminLogin from "./admin/login";
import AdminPage from "./admin/dashboard";
import AddProductPage from "./admin/add";
import EditProductPage from "./admin/edit";

const AppRoutes = [
  {
    index: true,
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <AdminPage/>
    },
  {
     path: "/add",
     element: <AddProductPage/>
    },
    {
        path: "/edit",
        Element: <EditProductPage/>
    },
    {
        path: "/login",
        Element: <AdminLogin/>
    },
    {
        path: "/Single_product",
        Element: <Single_product/>
    },
    {
        path: "/Cart",
        Element: <Cart/>
    },
    {
        path: "/Home",
        Element: <Home/>
    },
    {
        path: "/Header",
        Element: <Header/>
    },

];

export default AppRoutes;
