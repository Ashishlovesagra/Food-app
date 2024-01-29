import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import Error404 from '../Pages/Error404';
import AboutPage from '../Pages/AboutPage';
import GalleryPage from '../Pages/GalleryPage';
import Cart from '../Pages/Cart';
import CheckoutPage from '../Pages/CheckoutPage';
import Foodshop from '../Pages/Foodshop';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import Signup from '../Pages/Signup';
import SingleDishPage from '../Pages/SingleDishPage';
import SingleProducts from '../Pages/SingleProducts';
import Wistlist from '../Pages/Wistlist';

function Rout() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/gallery" element={<GalleryPage/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<CheckoutPage/>} />
    <Route path="/food-shop" element={<Foodshop/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/sign-up" element={<Signup/>} />
    {/* forgot-password page */}
    {/* contact-us page */}
    {/* menu page */}
    {/* shopping-cart page */}
    <Route path="/single-dish" element={<SingleDishPage/>} />
    <Route path="/single-product" element={<SingleProducts/>} />
    <Route path="/wistlist" element={<Wistlist/>} />
    <Route path="*" element={<Error404/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rout