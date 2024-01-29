import React from 'react'
import BreadcumCheckout from '../components/BreadcumCheckout';
import CheckoutArea from '../components/CheckoutArea';
import Footer from '../components/Footer';

function CheckoutPage() {
  return (
    <>
    {/* Breadcumb Checkout page */}
    <BreadcumCheckout/>
    {/* Checkout area */}
    <CheckoutArea/>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default CheckoutPage;