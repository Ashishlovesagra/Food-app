import React from "react";
import { FaPlus } from "react-icons/fa";

function ShoppingCart() {
  return (
    <>
      <div className="portfolio-info shopping-cart padding-top-120 padding-bottom-90">
        <div className="shopping-shapes">
          <span className="ps1">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png" alt />
          </span>
          <span className="pss2 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/26.png" alt />
          </span>
          <span className="ps3 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/7.png" alt />
          </span>
          <span className="ps4">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/32.png" alt />
          </span>
          <span className="pss5">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png" alt />
          </span>
          <span className="ps6">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png" alt />
          </span>
        </div>
        <div className="container">
          <form action="#">
            {/* upper table */}
            <div className="upper-table margin-bottom-30">
              <div className="row">
                <div className="col-lg-6 col-md-12 margin-bottom-30">
                  <div className="upper-t-left d-flex justify-content-between">
                    <input type="text" placeholder="enter coupon" />
                    <span>
                      <a className="btn" href="#">
                        {" "}
                        apply now
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="upper-t-right d-flex justify-content-between">
                    <a className="btn" href="#">
                      clear all
                    </a>
                    <a className="btn" href="#">
                      update cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* table */}
            <div style={{ overflowX: "auto" }}>
              <table className="table-one">
                <thead className="table-one-head">
                  <tr className="table-one-tr">
                    <th className="table-one-th" style={{ width: "50%" }}>
                      Product name
                    </th>
                    <th className="table-one-th" style={{ width: "10%" }}>
                      Price
                    </th>
                    <th className="table-one-th" style={{ width: "8%" }}>
                      Quantity
                    </th>
                    <th
                      className="table-one-th text-center"
                      style={{ width: "22%" }}
                    >
                      Subtotal
                    </th>
                    <th className="table-one-th" style={{ width: "10%" }} />
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      {/*data-th="Product"*/}
                      <div className="d-flex align-items-center">
                        {/*class="row"*/}
                        <div className=" d-none d-md-block col-md-4">
                          <div className="table-img">
                            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/c1.png" alt />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8">
                          <h5>burger patties</h5>
                        </div>
                      </div>
                    </td>
                    <td>$1.99</td>
                    {/*data-th="Price"*/}
                    <td>
                      {/* data-th="Quantity"*/}
                      <input
                        type="number"
                        className="form-control text-center"
                        defaultValue={1}
                      />
                    </td>
                    <td className="text-center">1.99</td>
                    {/*data-th="Subtotal"  */}
                    <td>
                      {/*class="actions" data-th=""*/}
                      <span className="remove">
                        <a href="#">
                          <FaPlus/>
                        </a>
                      </span>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*class="row"*/}
                        <div className="d-none d-md-block col-md-4">
                          <div className="table-img">
                            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/c2.png" alt />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                          <h5>Best Pizza Dough </h5>
                        </div>
                      </div>
                    </td>
                    <td>$1.99</td>
                    <td>
                      <input
                        type="number"
                        className="form-control text-center"
                        defaultValue={1}
                      />
                    </td>
                    <td className="text-center">1.99</td>
                    <td>
                      <span className="remove">
                        <a href="#">
                          <FaPlus />
                        </a>
                      </span>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-none d-md-block col-md-4">
                          <div className="table-img">
                            <img src="assets/images/menu-item/c3.png" alt />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                          <h5>Burger Patties</h5>
                        </div>
                      </div>
                    </td>
                    <td>$1.99</td>
                    {/*data-th="Price"*/}
                    <td>
                      {/* data-th="Quantity"*/}
                      <input
                        type="number"
                        className="form-control text-center"
                        defaultValue={1}
                      />
                    </td>
                    <td className="text-center">1.99</td>
                    {/*data-th="Subtotal"  */}
                    <td>
                      {/*class="actions" data-th=""*/}
                      <span className="remove">
                        <a href="#">
                          <FaPlus />
                        </a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* lower table */}
            <div className="row margin-top-60">
              <div className="col-lg-5">
                <div className="lower-table">
                  <h6>Proceed to Checkout</h6>
                  <div className="lower-table-info">
                    <ul className="d-flex justify-content-between">
                      <li className="sub">SUBTOTAL</li>
                      <li>$40</li>
                    </ul>
                    <hr />
                    <ul className="d-flex justify-content-between">
                      <li>Grand Total</li>
                      <li>$20</li>
                    </ul>
                    <button className="btn" type="submit">
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
