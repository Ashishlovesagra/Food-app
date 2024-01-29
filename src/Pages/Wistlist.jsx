import React from 'react'
import BreadcumbWistlist from '../components/BreadcumbWistlist';
import WistlistArea from '../components/WistlistArea';
import Footer from '../components/Footer';

function Wistlist() {
  return (
    <>
    {/* Breadcumb Wistlist */}
    <BreadcumbWistlist/>
    {/* Wistlist area */}
    <WistlistArea/>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default Wistlist;