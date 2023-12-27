
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
        path: "/edit/:id",
        element: <EditProductPage/>
    },
    {
        path: "/login",
        element: <AdminLogin/>
    },
    {
        path: "/Single_product",
        element: <Single_product/>
    },
    {
        path: "/Cart",
        element: <Cart/>
    },
    {
        path: "/Home",
        element: <Home/>
    },
    {
        path: "/Header",
        element: <Header/>
    },

];

export default AppRoutes;
