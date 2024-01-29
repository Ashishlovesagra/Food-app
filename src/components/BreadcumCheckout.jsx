import React from "react";
import Navbar from './Navbar';

function BreadcumCheckout() {
  return (
    <>
      <div className="banner-area breadcrumb-area padding-bottom-90">
        <Navbar/>
        <div className="bread-shapes">
          <span className="b-shape-1 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/5.png" alt />
          </span>
          <span className="b-shape-2">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png" alt />
          </span>
          <span className="b-shape-3">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/7.png" alt />
          </span>
          <span className="b-shape-4">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/9.png" alt />
          </span>
          <span className="b-shape-5">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/18.png" alt />
          </span>
          <span className="b-shape-6 item-animateOne">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/7.png" alt />
          </span>
        </div>
        <div className="container padding-top-120">
          <div className="row justify-content-center">
            <nav aria-label="breadcrumb">
              <h2 className="page-title">Checkout</h2>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <a href="index.html">Home / </a>{" "}
                  <a href="shopping-cart.html">Shopping Cart</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadcumCheckout;
