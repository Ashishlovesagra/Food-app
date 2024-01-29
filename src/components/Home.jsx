import React from "react";
import "./Style.css";
import Footer from "./Footer";
import Blog from "./Blog";
import Delivery from "./Delivery";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import PopularDishes from "./PopularDishes";
import PopularMenu from "./PopularMenu";
import AboutUs from "./AboutUs";
import Form from "./Form";
import Banner from './Banner'

function Home() {
  
  return (
    <>
      {/* Banner Area */}
      <Banner/>
      {/* Form Area */}
      <Form/>
      {/* About Us */}
      <AboutUs/>
      {/* Popluar menu area */}
      <PopularMenu/>
      {/* popular-dishes-area */}
      <PopularDishes/>
      {/* banner gallery */}
      <Gallery/>
      {/* countdown */}
      <Countdown/>
      {/* testimonial */}
      <Testimonial/>
      {/* slider-gallery-img */}
      <Slider/>
      {/* delivery area */}
      <Delivery/>
      {/* blog-area */}
      <Blog/>
      {/* footer area */}
      <Footer/>
      {/*  */}
    </>
  );
}

export default Home;
