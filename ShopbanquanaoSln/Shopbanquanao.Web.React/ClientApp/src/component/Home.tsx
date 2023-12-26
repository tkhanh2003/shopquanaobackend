import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../sanpham/Header"
import Men from "../sanpham/Men"
import Women from "../sanpham/Women"
import Kid from "../sanpham/Kid"
import Footer from "../sanpham/Footer";
import MainBanner from "../sanpham/Banner";

const Home = () => {

  return (
    
    <>
      <Header/>
      <MainBanner/>
      <Men />
      <Women />
      <Kid />
      <Footer />
      
    </>
  );
};

export default Home;