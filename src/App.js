import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopHeader from "./Layouts/TopHeader";
import BottomHeader from "./Layouts/BottomHeader";
import ProductList from "./Product/ProductList";
import ProductDetail from "./Product/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import {items} from "./Data";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
 const [data, setData] = useState([...items]);
 const [cart, setCart] = useState([])
 const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    toast("Product added to cart successfully !", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       });
  }

 return (
  <>
   <BrowserRouter>
    <header className="header_wrap">
     <TopHeader cart={cart} />
     <BottomHeader setData={setData} />
    </header>
    <Routes>
     <Route path="/" element={<ProductList items={data} setData={setData} addToCart={addToCart} />} />
     <Route path="/productdetail/:id" element={<ProductDetail items={data} setData={setData} addToCart={addToCart} />} />
     <Route path="/search/:term" element={<SearchItem  addToCart={addToCart} />} />
     <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
   </BrowserRouter>
  </>
 );
};

export default App;
