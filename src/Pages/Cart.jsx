import React from 'react'
import BreadcumbCart from '../components/BreadcumbCart';
import ShoppingCart from '../components/ShoppingCart';
import Footer from '../components/Footer';

function Cart() {
  return (
    <>
    {/* Breadcumb Cart */}
    <BreadcumbCart/>
    {/* shopping cart */}
    <ShoppingCart/>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default Cart;