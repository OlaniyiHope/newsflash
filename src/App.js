import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./components/culture/Culture";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cat from "./components/home/sideContent/cat/Cat";
import MemeGen from "./components/meme/MemeGen";
import ProductList from "./pages/ProductList";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepages />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/memegen" element={<MemeGen />} />
          <Route path="/cat/:categories" element={<Cat />} />
          <Route path="/properties/:category" element={<ProductList />} />
          <Route path="/properties/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/culture" element={<Culture />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
