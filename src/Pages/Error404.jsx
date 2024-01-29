import React from 'react'
import Breadcumb404 from '../components/Breadcumb404';
import Content404 from '../components/Content404';
import Footer from '../components/Footer'

function Error404() {
  return (
    <>
    {/* Breadcumb 404 */}
    <Breadcumb404/>
    {/* 404 content */}
    <Content404/>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default Error404;