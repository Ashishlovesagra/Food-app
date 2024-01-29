import React from 'react';
import BreadcumSingleRes from '../components/BreadcumSingleRes';
import ChickenRecipe from '../components/ChickenRecipe';
import ProductDisc from '../components/ProductDisc';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../components/Footer';

function SingleProducts() {
  return (
    <>
    {/* Breadcumb single res */}
    <BreadcumSingleRes/>
    {/* Chicken recipe */}
    <ChickenRecipe/>
    {/* Product discription */}
    <ProductDisc/>
    {/* Related  products */}
    <RelatedProducts/>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default SingleProducts;