import React from 'react'
import BreadcumbFoodshop from '../components/BreadcumbFoodshop';
import FoodshopArea from '../components/FoodshopArea';
import Footer from '../components/Footer';

function Foodshop() {
  return (
    <>
    {/* Breadcumb foodshop */}
    <BreadcumbFoodshop/>
    {/* Foodshop area */}
    <FoodshopArea/>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default Foodshop;