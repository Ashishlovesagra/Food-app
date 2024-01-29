import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function FoodshopArea() {
  return (
    <>
      <div className="food-area-wrapper">
        <div className="pshapes">
          <span className="ps-1 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/32.png" alt />
          </span>
          <span className="ps-2 item-animateTwo">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png" alt />
          </span>
          <span className="ps3 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png" alt />
          </span>
          <span className="ps-4">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png" alt />
          </span>
          <span className="ps-5">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png" alt />
          </span>
          <span className="ps-6">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png" alt />
          </span>
          <span className="ps-7 item-animateOne">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png" alt />
          </span>
        </div>
        <div className="container padding-top-120 padding-bottom-120">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              {/* sidebar-widget-1 */}
              <div
                className="sidebar-widget-1 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h5>Hot Sale Products</h5>
                <div className="sidebar-widget d-flex">
                  <div className="dish-img">
                    <a href="single-food.html">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png" alt />
                    </a>
                  </div>
                  <div className="dish-content">
                    <h6>
                      {" "}
                      <a href="single-food.html">Chicken Fry Recipe</a>
                    </h6>
                    <span className="price">$10.00</span>
                    <span>
                      <a className="cart-select" href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="sidebar-widget d-flex">
                  <div className="dish-img">
                    <a href="single-food.html">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd4.png" alt />
                    </a>
                  </div>
                  <div className="dish-content">
                    <h6>
                      {" "}
                      <a href="single-food.html">Chicken Soup Rejala</a>
                    </h6>
                    <span className="price">$20.00</span>
                    <span>
                      <a className="cart-select" href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="sidebar-widget d-flex">
                  <div className="dish-img">
                    <a href="single-food.html">
                      {" "}
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png" alt />
                    </a>
                  </div>
                  <div className="dish-content">
                    <h6>
                      {" "}
                      <a href="single-food.html">The Best Black Frame</a>
                    </h6>
                    <span className="price">$80.00</span>
                    <span>
                      <a className="cart-select" href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="sidebar-widget d-flex">
                  <div className="dish-img">
                    <a href="single-food.html">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png" alt />
                    </a>
                  </div>
                  <div className="dish-content">
                    <h6>
                      {" "}
                      <a href="single-food.html">The Best Black Frame</a>
                    </h6>
                    <span className="price">$80.00</span>
                    <span>
                      <a className="cart-select" href="shopping-cart.html">
                        <FaShoppingBasket/>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* sidebar-widget-2 */}
              <div
                className="sidebar-widget-2 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h5>filter by price</h5>
                <div className="filter-sidebar margin-top-30">
                  <div
                    id="slider-range"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ left: "15%", width: "45%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "15%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "60%" }}
                    />
                  </div>
                  <div>
                    <div className="margin-top-30">
                      <span className="textbold"> Price:</span>{" "}
                      <input
                        type="text"
                        id="amount"
                        readOnly
                        className="textbold"
                      />
                      <button className="btn">filter</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* sidebar-widget-3 */}
              <div
                className="sidebar-widget-3 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h5>filter by menu</h5>
                <div className="sidebar-widget d-flex align-items-center">
                  <div className="dish-img">
                    <a href="single-food.html">
                      {" "}
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/fm1.png" alt />
                    </a>
                  </div>
                  <div className="dish-content d-flex justify-content-between">
                    <h6>
                      {" "}
                      <a href="single-food.html">burger food</a>
                    </h6>
                    <span className="price">20</span>
                  </div>
                </div>
                <div className="sidebar-widget d-flex align-items-center">
                  <div className="dish-img">
                    <a href="single-food.html">
                      {" "}
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/fm2.png" alt />
                    </a>
                  </div>
                  <div className="dish-content d-flex justify-content-between">
                    <h6>
                      {" "}
                      <a href="single-food.html">Chicken fry</a>
                    </h6>
                    <span className="price">50</span>
                  </div>
                </div>
                <div className="sidebar-widget d-flex align-items-center">
                  <div className="dish-img">
                    <a href="single-food.html">
                      {" "}
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/fm3.png" alt />
                    </a>
                  </div>
                  <div className="dish-content d-flex justify-content-between">
                    <h6>
                      {" "}
                      <a href="single-food.html">Pizza</a>
                    </h6>
                    <span className="price">20</span>
                  </div>
                </div>
                <div className="sidebar-widget d-flex align-items-center">
                  <div className="dish-img">
                    <a href="single-food.html">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/fm4.png" alt />
                    </a>
                  </div>
                  <div className="dish-content d-flex">
                    <h6>
                      {" "}
                      <a href="single-food.html">Chicken fry</a>
                    </h6>
                    <span className="price">50</span>
                  </div>
                </div>
              </div>
              {/* sidebar-widget-4 */}
              <div
                className="sidebar-widget-4 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="gallery-img-4">
                  <h5>Super Combo Burger</h5>
                  <a href="shopping-cart.html" className="btn">
                    order now
                  </a>
                  <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/22.png" alt />
                  <span className="gprice-4">
                    <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/25.png" alt />
                  </span>
                  <span className="gshape-1">
                    <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/35.png" alt />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              {/* food area */}
              <section className="food-area  popular-dishes-area">
                <div className="container">
                  <nav className="popular-tab-nav d-flex flex-wrap justify-content-between align-items-center  margin-bottom-60">
                    {/* <div class="nav" id="nav-tab-1" role="tablist">
                              <a class="nav-link active" id="food1-tab" data-toggle="tab" href="#food1" role="tab"
                                  aria-controls="food1" aria-selected="true">
                                  <span><i class="fas fa-th"></i></span>
                              </a>
                              <a class="nav-link" id="food2-tab" data-toggle="tab" href="#food2" role="tab"
                                  aria-controls="food2" aria-selected="false">
                                  <span><i class="fas fa-th-list"></i></span>
                              </a>
                          </div> */}
                    <ul className="nav" id="nav-tab-1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <div
                          className="nav-link active"
                          id="food1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#food1"
                          role="tab"
                          aria-controls="food1"
                          aria-selected="true"
                        >
                          <span>
                            <FaTh/>
                          </span>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div
                          className="nav-link"
                          id="food2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#food2"
                          role="tab"
                          aria-controls="food2"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <span>
                            <FaThList/>
                          </span>
                        </div>
                      </li>
                    </ul>
                    <span>There are 16 products.</span>
                    <div className="sorting-area">
                      <span className="margin-right-20"></span>
                      <span>sort by price: </span>
                      <span>
                        <select name="#" id="#">
                          <option value="#">high to low</option>
                          <option value="#">low to high</option>
                          <option value="#">high to low</option>
                        </select>
                      </span>
                    </div>
                  </nav>
                  {/* main-content */}
                  <div className="tab-content" id="nav-tabContent-1">
                    {/* food 1 */}
                    <div
                      className="tab-pane fade show active"
                      id="food1"
                      role="tabpanel"
                      aria-labelledby="food1-tab"
                    >
                      <div className="row">
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                <a href="single-food.html"> Garlic Burger</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">hot</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                <a href="single-food.html">Chicken Fry</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price badge-color">
                                price :$15.00
                              </span>
                              <span className="rating">
                                {" "}
                                <FaStar/> 5star
                              </span>
                            </div>
                            <span className="badge badge-bg-color">new</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">sale</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html"> Garlic Burger</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">hot</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chicken Fry</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="badge-color price">
                                price :$15.00
                              </span>
                              <span className="rating">
                                {" "}
                                <FaStar/> 5star
                              </span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chickpea Soup</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">sale</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html"> Garlic Burger</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">hot</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chicken Fry</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="badge-color price">
                                price :$15.00
                              </span>
                              <span className="rating">
                                {" "}
                                <FaStar/> 5star
                              </span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chickpea Soup</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">sale</span>
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
                      </div>
                    </div>
                    {/* food 2 */}
                    <div
                      className="tab-pane fade"
                      id="food2"
                      role="tabpanel"
                      aria-labelledby="food2-tab"
                    >
                      <div className="row">
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                <a href="single-food.html"> Garlic Burger</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">hot</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                <a href="single-food.html">Chicken Fry</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price badge-color">
                                price :$15.00
                              </span>
                              <span className="rating">
                                {" "}
                                <FaStar/> 5star
                              </span>
                            </div>
                            <span className="badge badge-bg-color">new</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">sale</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html"> Garlic Burger</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">hot</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chicken Fry</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="badge-color price">
                                price :$15.00
                              </span>
                              <span className="rating">
                                {" "}
                                <FaStar/> 5star
                              </span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chickpea Soup</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">sale</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html"> Garlic Burger</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">hot</span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png"
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
                                It is a long established fact that a reader BBQ
                                food Chicken.
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chicken Fry</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="badge-color price">
                                price :$15.00
                              </span>
                              <span className="rating">
                                {" "}
                                <FaStar/> 5star
                              </span>
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
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
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
                                src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png"
                                style={{ width: "inherit" }}
                                alt
                              />
                            </div>
                            <div className="dish-content">
                              <h5>
                                <a href="single-food.html">Chickpea Soup</a>
                              </h5>
                              <p>
                                It is a long established fact that a reader BBQ
                                food Chicken.
                              </p>
                              <span className="price">price :$15.00</span>
                            </div>
                            <span className="badge">sale</span>
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
                      </div>
                    </div>
                  </div>
                </div>
                {/* pagination-area */}
                <div className="pagination-area">
                  <div className="container">
                    <div className="pagination">
                      <a className="active" href="#">
                        01
                      </a>
                      <a href="#">02</a>
                      <a href="#">03</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodshopArea;
