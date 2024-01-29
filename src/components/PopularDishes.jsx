import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function PopularDishes() {
    const styles1 = {
        visibility: "visible",
        animationName: "fadeInUp",
      };
      const styles2 = {
        width: "inherit",
      };
  return (
    <>
      <section className="popular-dishes-area padding-top-110">
        <div className="pshapes">
          <span className="ps-1 item-animateTwo">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/11.png"
              alt=""
            />
          </span>
          <span className="ps-2 item-animateTwo">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png"
              alt=""
            />
          </span>
          <span className="ps-3 item-bounce">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png"
              alt=""
            />
          </span>
          <span className="ps-4 item-bounce">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png"
              alt=""
            />
          </span>
          <span className="ps-5">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/15.png"
              alt=""
            />
          </span>
          <span className="ps-6">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png"
              alt=""
            />
          </span>
        </div>
        <div className="container">
          <nav
            className="
            popular-tab-nav
            d-flex
            flex-wrap
            justify-content-between
            align-items-center
          "
          >
            <div
              className="common-title-area padding-bottom-30 wow fadeInLeft"
              style={styles1}
            >
              <h3>food items</h3>
              <h2>
                popular <span>dishes</span>
              </h2>
            </div>
            <ul
              className="nav padding-bottom-30"
              id="popularDishesTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link menu-text"
                  id="all-items-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#all-items-tab-pane"
                  role="tab"
                  aria-controls="all-items-tab-pane"
                >
                  All Items
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link menu-text"
                  id="pizza-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pizza-tab-pane"
                  role="tab"
                  aria-controls="pizza-tab-pane"
                >
                  Pizza
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link menu-text"
                  id="burger-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#burger-tab-pane"
                  role="tab"
                  aria-controls="burger-tab-pane"
                >
                  burger
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link menu-text"
                  id="chicken-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#chicken-tab-pane"
                  role="tab"
                  aria-controls="chicken-tab-pane"
                >
                  Chicken
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link menu-text"
                  id="drinks-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#drinks-tab-pane"
                  role="tab"
                  aria-controls="drinks-tab-pane"
                >
                  Drinks
                </div>
              </li>
            </ul>
          </nav>
          {/* main contain */}
          <div className="tab-content" id="popularDishesTabContent">
            {/* all items */}
            <div
              className="tab-pane fade show active"
              id="all-items-tab-pane"
              role="tabpanel"
              aria-labelledby="all-items-tab"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd1.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd2.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Vegetable Pizza </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price">price :$15.00</span>
                    </div>
                    <span className="badge"></span>
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd3.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price badge-color">price :$15.00</span>
                      <span className="rating">
                        <FaStar />
                        5star
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd4.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Vegetable Pizza </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price">price :$15.00</span>
                    </div>
                    <span className="badge"></span>
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="badge-color price">price :$15.00</span>
                      <span className="rating">
                        <FaStar />
                        5star
                      </span>
                    </div>
                    <span className="badge"></span>
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={styles2}
                        alt=""
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pizza */}
            <div
              className="tab-pane fade"
              id="pizza-tab-pane"
              role="tabpanel"
              aria-labelledby="pizza-tab"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Margherita </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Marinara </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price badge-color">price :$15.00</span>
                      <span className="rating">
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Frutti Di Mare </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Americana </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Pizza Al Pesto </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="badge-color price">price :$15.00</span>
                      <span className="rating">
                        <i className="fas fa-star" /> 5star
                      </span>
                    </div>
                    <span className="badge" />
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Americana </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* burger */}
            <div
              className="tab-pane fade"
              id="burger-tab-pane"
              role="tabpanel"
              aria-labelledby="burger-tab"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price badge-color">price :$15.00</span>
                      <span className="rating">
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="badge-color price">price :$15.00</span>
                      <span className="rating">
                        <FaStar /> 5star
                      </span>
                    </div>
                    <span className="badge" />
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* chicken */}
            <div
              className="tab-pane fade"
              id="chicken-tab-pane"
              role="tabpanel"
              aria-labelledby="chicken-tab"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price badge-color">price :$15.00</span>
                      <span className="rating">
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="badge-color price">price :$15.00</span>
                      <span className="rating">
                        <FaStar /> 5star
                      </span>
                    </div>
                    <span className="badge" />
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-dishes">
                    <div className="dish-img">
                      <img
                        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                        style={{ width: "inherit" }}
                        alt
                      />
                    </div>
                    <div className="dish-content">
                      <h5>
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* drinks */}
            <div
              className="tab-pane fade"
              id="drinks-tab-pane"
              role="tabpanel"
              aria-labelledby="drinks-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="price badge-color">price :$15.00</span>
                      <span className="rating">
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Garlic Burger </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Vegetable Pizza </a>
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
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chicken Fry </a>
                      </h5>
                      <p>
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <span className="badge-color price">price :$15.00</span>
                      <span className="rating">
                        <FaStar /> 5star
                      </span>
                    </div>
                    <span className="badge" />
                    <div className="cart-opt">
                      <span>
                        <a href="#">
                          <FaHeart />
                        </a>
                      </span>
                      <span>
                        <a href="shopping-cart.html">
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
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
                        <a href="single-dish.html">Chickpea Soup </a>
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
                          <FaShoppingBasket />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularDishes;
