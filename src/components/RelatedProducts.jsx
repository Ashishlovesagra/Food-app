import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';

function RelatedProducts() {
  return (
    <>
      <div className="related-product padding-top-115 padding-bottom-100">
        <div className="related-shapes">
          <span className="rs1">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png" alt />
          </span>
        </div>
        <div
          className="container wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <h3>
            relates <span>product</span>
          </h3>
          <div className="related-product-inner">
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-dishes">
                  <div className="dish-img">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd1.png"
                      style={{ width: "inherit" }}
                      alt
                    />
                  </div>
                  <div className="dish-content">
                    <h5>
                      <a href="single-food.html">Garlic Burger</a>
                    </h5>
                    <p>
                      It is a long established fact that a reader BBQ food
                      Chicken.
                    </p>
                    <span className="price">price :$15.00</span>
                  </div>
                  <span className="badge">hot</span>
                  <div className="cart-opt">
                    <span>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </span>
                    <span>
                      <a href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-dishes">
                  <div className="dish-img">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd2.png"
                      style={{ width: "inherit" }}
                      alt
                    />
                  </div>
                  <div className="dish-content">
                    <h5>
                      {" "}
                      <a href="single-food.html">Vegetable Pizza</a>
                    </h5>
                    <p>
                      It is a long established fact that a reader BBQ food
                      Chicken.
                    </p>
                    <span className="price">price :$15.00</span>
                  </div>
                  <span className="badge" />
                  <div className="cart-opt">
                    <span>
                      <a href="#">
                        <FaHeart/>
                      </a>
                    </span>
                    <span>
                      <a href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-dishes">
                  <div className="dish-img">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd3.png"
                      style={{ width: "inherit" }}
                      alt
                    />
                  </div>
                  <div className="dish-content">
                    <h5>
                      {" "}
                      <a href="single-food.html">Chicken fry</a>
                    </h5>
                    <p>
                      It is a long established fact that a reader BBQ food
                      Chicken.
                    </p>
                    <span className="price badge-color">price :$15.00</span>
                    <span className="rating">
                      {" "}
                      <FaStar /> 5star
                    </span>
                  </div>
                  <span className="badge badge-bg-color">new</span>
                  <div className="cart-opt">
                    <span>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </span>
                    <span>
                      <a href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-dishes">
                  <div className="dish-img">
                    <img
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd4.png"
                      style={{ width: "inherit" }}
                      alt
                    />
                  </div>
                  <div className="dish-content">
                    <h5>
                      <a href="single-food.html">Chickpea Soup</a>
                    </h5>
                    <p>
                      It is a long established fact that a reader BBQ food
                      Chicken.
                    </p>
                    <span className="price">price :$15.00</span>
                  </div>
                  <span className="badge">sale</span>
                  <div className="cart-opt">
                    <span>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </span>
                    <span>
                      <a href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;