import React from 'react'
import BreadcumbGallery from '../components/BreadcumbGallery';
import MainGallery from '../components/MainGallery';
import Footer from '../components/Footer';

function GalleryPage() {
  return (
    <>
    {/* breadcumb gallery */}
    <BreadcumbGallery/>
    {/* main-gallery area */}
    <MainGallery/>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default GalleryPage;