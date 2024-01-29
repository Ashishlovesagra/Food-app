import React from 'react';
import BreadcumbSingleDish from '../components/BreadcumbSingleDish';
import SingleDishPortfolioBanner from '../components/SingleDishPortfolioBanner';
import SingleDishPortfolioInfo from '../components/SingleDishPortfolioInfo';
import Footer from '../components/Footer';

function SingleDishPage() {
  return (
    <>
    {/* Breadcumb Single-Dish */}
    <BreadcumbSingleDish/>
    {/* Single-Dish-Portfolio-Banner */}
    <SingleDishPortfolioBanner/>
    {/* Single-Dish-Portfolio-Info */}
    <SingleDishPortfolioInfo/>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default SingleDishPage;