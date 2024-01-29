import React from 'react';
import '../components/Style.css';
import Breadcumb from '../components/Breadcumb';
import FoodsCounter from '../components/FoodsCounter';
import About from '../components/About';
import DeliciousFood from '../components/DeliciousFood';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

function AboutPage() {
  return (
    <>
    {/* breadcumb area */}
    <Breadcumb/>
    {/* FoodsCounter */}
    <FoodsCounter/>
    {/* About */}
    <About/>
    {/* DeliciousFood */}
    <DeliciousFood/>
    {/* Team */}
    <Team/>
    {/* testimonial */}
    <Testimonial/>
    {/* slider-gallery */}
    <Slider/>
    {/* Blog area */}
    <Blog/>
    {/* footer area */}
    <Footer/>
    </>
  )
}

export default AboutPage;