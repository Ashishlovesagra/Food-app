import React from "react";

function CheckoutArea() {
  return (
    <>
      <div className="checkout-area padding-top-120 padding-bottom-120">
        <div className="cshapes">
          <span className="cs-1">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png" alt />
          </span>
          <span className="cs-2 item-bounce">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/12.png" alt />
          </span>
          <span className="cs-3">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/13.png" alt />
          </span>
          <span className="cs-4">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/14.png" alt />
          </span>
          <span className="cs-5">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/32.png" alt />
          </span>
          <span className="cs-6">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/16.png" alt />
          </span>
        </div>
        <div className="container">
          <form action="#">
            <div className="row">
              <div
                className="col-lg-6  wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="checkout-left">
                  <h4>Billing Details</h4>
                  <input type="text" placeholder="first name" required />
                  <input type="text" placeholder="last name" required />
                  <input type="text" placeholder="company name" />
                  <select name="#" id="#">
                    <option value="#">Country</option>
                    <option value="#">Country-1</option>
                    <option value="#">Country-2</option>
                    <option value="#">Country-3</option>
                  </select>
                  <input type="text" placeholder="street address" />
                  <input type="text" placeholder="town/city" required />
                  <input type="number" placeholder="zip" />
                  <input type="tel" placeholder="phone" required />
                  <input type="email" placeholder="email address" required />
                  <input type="text" placeholder="order notes(optional)" />
                </div>
              </div>
              <div
                className="col-lg-6  wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="checkout-right">
                  <h4>Your Order</h4>
                  <div className="pricing-box">
                    <ul className="p-head">
                      <li className="uppercase">product</li>
                      <li className="uppercase">total</li>
                    </ul>
                    <div className="divider" />
                    <ul>
                      <li>Ultimate Photoshop Training</li>
                      <li>$1,699</li>
                    </ul>
                    <ul>
                      <li>The Complete Financial Analyst</li>
                      <li>$1,699</li>
                    </ul>
                    <ul>
                      <li>The Complete Advanced WP</li>
                      <li>$1,699</li>
                    </ul>
                    <ul>
                      <li className="uppercase">
                        <b>subtotal</b>
                      </li>
                      <li>
                        <b>$5,699</b>
                      </li>
                    </ul>
                    <ul>
                      <li className="uppercase">
                        <b>Perched</b>
                      </li>
                      <li>Flat rate: $5.00</li>
                      <li>Bank Transfer</li>
                      <li>free</li>
                    </ul>
                    <ul className="bg-white">
                      <li className="uppercase">total</li>
                      <li className="total">
                        <b>$5,699</b>
                      </li>
                    </ul>
                  </div>
                  <input type="radio" id="bank" />
                  <label htmlFor="bank">DIRECT BANK TRANSFER</label>
                  <br />
                  <input type="radio" id="check" />
                  <label htmlFor="check">CHECK PAYMENTS</label>
                  <br />
                  <div className="payment-img">
                    <a href="#">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/payment.png" alt />
                    </a>
                  </div>
                  <input type="radio" id="cash" />
                  <label htmlFor="cash">CASH ON DELIVERY</label>
                  <br />
                  <input type="radio" id="terms" />
                  <label htmlFor="terms">
                    I’ve read and accept the{" "}
                    <a href="#">terms &amp; conditions *</a>
                  </label>
                  <br />
                  <button type="submit" className="btn">
                    place order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckoutArea;
