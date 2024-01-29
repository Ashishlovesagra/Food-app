import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function BreadcumbLogin() {
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
              <h2 className="page-title">Login Page</h2>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">
                  Login Page
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default BreadcumbLogin;