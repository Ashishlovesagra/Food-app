import React from "react";
import { FaSliders } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function ProfileArea() {
  return (
    <>
      <section className="profile-area padding-top-120 padding-bottom-120">
        <div className="container">
          <div className="row align-items-start">
            {/* tab-buttons */}
            <div className="col-md-4 col-lg-3">
              <div
                className="profile-tabs nav flex-column nav-pills me-3"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link text-start"
                  id="dahoboard-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#dahoboard"
                  type="button"
                  role="tab"
                  aria-controls="dahoboard"
                >
                  <FaSliders />
                  Dashboard
                </button>
                <button
                  className="nav-link text-start active"
                  id="order-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#order"
                  type="button"
                  role="tab"
                  aria-controls="order"
                >
                  <FaCartPlus />
                  Orders
                </button>
                <button
                  className="nav-link text-start"
                  id="track-order-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#track-order"
                  type="button"
                  role="tab"
                  aria-controls="track-order"
                >
                  <FaShoppingCart />
                  Track Order
                </button>
                <button
                  className="nav-link text-start"
                  id="address-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#address"
                  type="button"
                  role="tab"
                  aria-controls="address"
                >
                  <FaLocationDot />
                  My Address
                </button>
                <button
                  className="nav-link text-start"
                  id="account-details-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#account-details"
                  type="button"
                  role="tab"
                  aria-controls="account-details"
                >
                  <FaUser />
                  Account Details
                </button>
              </div>
            </div>
            {/* tab-content */}
            <div className="col-md-8 col-lg-9">
              <div className="tab-content">
                {/* dahoboard-tab */}
                <div
                  className="tab-pane fade"
                  id="dahoboard"
                  role="tabpanel"
                  aria-labelledby="dahoboard-tab"
                >
                  <h5 className="tab-title">
                    Hello <span>Alex!</span>{" "}
                  </h5>
                  <p>
                    From your account dashboard. you can easily check &amp; view
                    your recent orders,
                    <br /> manage your shipping and billing addresses and edit
                    your password and account details.
                  </p>
                  <div className="recent-orders margin-top-40">
                    <h5 className="margin-bottom-30">Recent Orders</h5>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Branch</th>
                            <th>Total</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Kesar Royal Milkshake</td>
                            <td>March 45, 2020</td>
                            <td>Processing</td>
                            <td>Uttara Branch</td>
                            <td>$125.00</td>
                            <td>
                              <a href="#" className="btn-small d-block">
                                Cancel Order
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Double Cheese pizza</td>
                            <td>June 29, 2020</td>
                            <td>Completed</td>
                            <td>Dhaka Branch</td>
                            <td>$364.00</td>
                            <td>
                              <a href="#" className="btn-small d-block">
                                Cancel Order
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td> Indian Fries</td>
                            <td>August 02, 2020</td>
                            <td>Completed</td>
                            <td>USA Branch</td>
                            <td>$280.00</td>
                            <td>
                              <a href="#" className="btn-small d-block">
                                Cancel Order
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination order-pagination">
                      <ul>
                        <li className="prev">
                          <a href="#">Prev</a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li className="pagination-dot">...</li>
                        <li>
                          <a href="#">10</a>
                        </li>
                        <li className="next">
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* order-tab */}
                <div
                  className="tab-pane fade active show"
                  id="order"
                  role="tabpanel"
                  aria-labelledby="order-tab"
                >
                  <h5 className="margin-bottom-30">Your Orders</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Branch</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Kesar Royal Milkshake</td>
                          <td>March 45, 2020</td>
                          <td>Processing</td>
                          <td>Uttara Branch</td>
                          <td>$125.00</td>
                          <td>
                            <a href="#" className="btn-small d-block">
                              Cancel Order
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Double Cheese pizza</td>
                          <td>June 29, 2020</td>
                          <td>Completed</td>
                          <td>Dhaka Branch</td>
                          <td>$364.00</td>
                          <td>
                            <a href="#" className="btn-small d-block">
                              Cancel Order
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td> Indian Fries</td>
                          <td>August 02, 2020</td>
                          <td>Completed</td>
                          <td>USA Branch</td>
                          <td>$280.00</td>
                          <td>
                            <a href="#" className="btn-small d-block">
                              Cancel Order
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination order-pagination">
                    <ul>
                      <li className="prev">
                        <a href="#">Prev</a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="pagination-dot">...</li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li className="next">
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* track-order-tab */}
                <div
                  className="tab-pane fade"
                  id="track-order"
                  role="tabpanel"
                  aria-labelledby="track-order-tab"
                  tabIndex={0}
                >
                  <h5 className="tab-title">Orders tracking</h5>
                  <p>
                    To track your order please enter your OrderID in the box
                    below and press "Track" button. This was given to you on
                    your receipt and in the confirmation email you should have
                    received.
                  </p>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="order-id" className="form-label">
                        Order Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="order-id"
                        aria-describedby="helpingLine"
                      />
                      <div id="helpingLine" className="form-text">
                        Found in your order confirmation email
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="billing-email" className="form-label">
                        Billing email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="billing-email"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Track
                    </button>
                  </form>
                </div>
                {/* address-tab */}
                <div
                  className="tab-pane fade"
                  id="address"
                  role="tabpanel"
                  aria-labelledby="address-tab"
                >
                  <div className="front-address" id="front-address">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5 className="tab-title">Billing Address</h5>
                        <ul>
                          <li>Uttara, Dhaka</li>
                          <li>Yello Road, Bangladesh</li>
                          <li>Dhaka</li>
                          <li>1230</li>
                          <li>
                            <a href="#" className="edit-address">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <h5 className="tab-title">Shipping Address</h5>
                        <ul>
                          <li>4299 Express Lane</li>
                          <li>Sarasota,</li>
                          <li>FL 34249 USA.</li>
                          <li>Phone: 1.941.227.4444</li>
                          <li>Sarasota</li>
                          <li>
                            <a href="#" className="edit-address">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="edit-address-form" id="edit-address-form">
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <h5 className="tab-title">Billing Address</h5>
                          <div className="mb-3">
                            <label
                              htmlFor="billing-address-1"
                              className="form-label"
                            >
                              Address Line 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="billing-address-1"
                              defaultValue="Uttara Dhaka"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="billing-address-2"
                              className="form-label"
                            >
                              Address Line 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="billing-address-2"
                              defaultValue="Yello Road, Bangladesh"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="billing-town"
                              className="form-label"
                            >
                              Town
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="billing-town"
                              defaultValue="Dhaka"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="billing-zip" className="form-label">
                              Post / Area / Zip Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="billing-zip"
                              defaultValue={1230}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h5 className="tab-title">Shipping Address</h5>
                          <div className="mb-3">
                            <label htmlFor="address-1" className="form-label">
                              Address Line 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address-1"
                              defaultValue="Uttara Dhaka"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="address-2" className="form-label">
                              Address Line 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address-2"
                              defaultValue="Yello Road, Bangladesh"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="town" className="form-label">
                              Town
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="town"
                              defaultValue="Dhaka"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="zip" className="form-label">
                              Post / Area / Zip Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              defaultValue={1230}
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary">Save</button>
                      <button className="btn btn-primary" id="back-btn">
                        Back
                      </button>
                    </form>
                  </div>
                </div>
                {/* account-details */}
                <div
                  className="tab-pane fade"
                  id="account-details"
                  role="tabpanel"
                  aria-labelledby="account-details-tab"
                  tabIndex={0}
                >
                  <form>
                    {/* account-details */}
                    <div className="account-details">
                      <h5 className="tab-title">Account Details</h5>
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userPhone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userPhone"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                    {/* password-change */}
                    <div className="password-change">
                      <h5 className="tab-title">Change Password</h5>
                      <div className="mb-3">
                        <label htmlFor="currentPass" className="form-label">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="currentPass"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="newPass" className="form-label">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPass"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="conPass" className="form-label">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="conPass"
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary">Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileArea;
