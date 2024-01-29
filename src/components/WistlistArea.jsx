import React from "react";
import { FaTrashCan } from "react-icons/fa6";

function WistlistArea() {
  return (
    <>
      <section className="wishlist-area padding-top-120 padding-bottom-120">
        <div className="container">
          <h3 className="text-center margin-bottom-30">My Wishlist</h3>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th colSpan={2}>Product</th>
                  <th>Price</th>
                  <th>Stock status</th>
                  <th>Action</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="product-img"
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/drinks.png"
                      alt="product-img"
                    />
                  </td>
                  <td>
                    <a href="#">Drinks</a>
                  </td>
                  <td>$29.99</td>
                  <td>Stock</td>
                  <td>
                    {" "}
                    <a href="#">Add To Cart</a>
                  </td>
                  <td>
                    <a className="delete-product" href="#">
                      <FaTrashCan />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="product-img"
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/chicken.png"
                      alt="product-img"
                    />
                  </td>
                  <td>
                    <a href="#">Chicken</a>
                  </td>
                  <td>$29.99</td>
                  <td>Stock</td>
                  <td>
                    {" "}
                    <a href="#">Add To Cart</a>
                  </td>
                  <td>
                    <a href="#">
                      <FaTrashCan />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="product-img"
                      src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/chicken-banner.png"
                      alt="product-img"
                    />
                  </td>
                  <td>
                    <a href="#">Chicken Covy</a>
                  </td>
                  <td>$29.99</td>
                  <td>Out of Stock</td>
                  <td>
                    {" "}
                    <a href="#">Add To Cart</a>
                  </td>
                  <td>
                    <a href="#">
                      <FaTrashCan/>
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
      </section>
    </>
  );
}

export default WistlistArea;
