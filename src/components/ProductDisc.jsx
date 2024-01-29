import React from "react";

function ProductDisc() {
  return (
    <>
      <section className="product-des-area">
        <div className="pdes-shapes">
          <span className="pds1">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/assets/images/img/32.png" alt />
          </span>
          <span className="pds2">
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/assets/images/shapes/7.png" alt />
          </span>
        </div>
        <div className="container">
          <div className="product-des-nav margin-bottom-30">
            <ul className="nav" id="productDesTab" role="tablist">
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link active"
                  id="des-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#des"
                  role="tab"
                  aria-controls="des"
                  aria-selected="true"
                >
                  Description
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link"
                  id="info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#info"
                  role="tab"
                  aria-controls="info"
                  aria-selected="false"
                >
                  Additional information
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link"
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected="false"
                >
                  Reviews
                </div>
              </li>
            </ul>
          </div>
          <div className="product-des-content">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="des"
                role="tabpanel"
                aria-labelledby="info-tab"
              >
                <div className="pd-inner-content">
                  <div className="pd-shapes">
                    <span className="pds1">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/assets/images/shapes/17.png" alt />
                    </span>
                    <span className="pds2">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/assets/images/shapes/7.png" alt />
                    </span>
                    <span className="pds3">
                      <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/assets/images/shapes/28.png" alt />
                    </span>
                  </div>
                  <p>
                    A hamburger (also burger for short) is a sandwich consisting
                    of one or more cooked patties of ground meat, usually beef,
                    placed inside a sliced bread roll or bun. The patty may be
                    pan fried, grilled, smoked or flame broiled. Hamburgers are
                    often served with cheese.
                  </p>
                  <p>
                    {" "}
                    <b>Ingredients </b> Focaccia bun, Balsamic Vinaigrette,
                    Pesto, Tomato, Swiss Cheese
                  </p>
                  <h6 className="margin-bottom-30">burger size</h6>
                  <div className="table-box d-flex flex-wrap">
                    <table className="margin-bottom-30">
                      <tbody>
                        <tr>
                          <th rowSpan={3} className="heading">
                            burger <br />
                            king <br />
                            regular <br />
                            fries
                          </th>
                          <th>s</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th>m</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th>l</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <th rowSpan={3} className="heading">
                            burger <br />
                            king <br />
                            satisfries
                          </th>
                          <th>value</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th>s</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th>m</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="info"
                role="tabpanel"
                aria-labelledby="info"
              >
                <div className="pd-inner-content">
                  <p>
                    A hamburger (also burger for short) is a sandwich consisting
                    of one or more cooked patties of ground meat, usually beef,
                    placed inside a sliced bread roll or bun. The patty may be
                    pan fried, grilled, smoked or flame broiled. Hamburgers are
                    often served with cheese.
                  </p>
                  <p>
                    <b>Ingredients </b> Focaccia bun, Balsamic Vinaigrette,
                    Pesto, Tomato, Swiss Cheese
                  </p>
                  <h6 className="margin-bottom-30">burger size</h6>
                  <div className="table-box d-flex flex-wrap">
                    <table className="margin-bottom-30">
                      <tbody>
                        <tr>
                          <th rowSpan={3} className="heading">
                            burger <br />
                            king <br />
                            regular <br />
                            fries
                          </th>
                          <th>s</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th>m</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th>l</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <th rowSpan={3} className="heading">
                            burger <br />
                            king <br />
                            satisfries
                          </th>
                          <th>value</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th>s</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th>m</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
                <div className="pd-inner-content">
                  <p>
                    A hamburger (also burger for short) is a sandwich consisting
                    of one or more cooked patties of ground meat, usually beef,
                    placed inside a sliced bread roll or bun. The patty may be
                    pan fried, grilled, smoked or flame broiled. Hamburgers are
                    often served with cheese.
                  </p>
                  <p>
                    {" "}
                    <b>Ingredients </b> Focaccia bun, Balsamic Vinaigrette,
                    Pesto, Tomato, Swiss Cheese
                  </p>
                  <h6 className="margin-bottom-30">burger size</h6>
                  <div className="table-box d-flex flex-wrap">
                    <table className="margin-bottom-30">
                      <tbody>
                        <tr>
                          <th rowSpan={3} className="heading">
                            burger <br />
                            king <br />
                            regular <br />
                            fries
                          </th>
                          <th>s</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th>m</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th>l</th>
                          <td>128</td>
                          <td>340</td>
                          <td>15</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <th rowSpan={3} className="heading">
                            burger <br />
                            king <br />
                            satisfries
                          </th>
                          <th>value</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th>s</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th>m</th>
                          <td>87</td>
                          <td>190</td>
                          <td>8</td>
                        </tr>
                      </tbody>
                    </table>
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

export default ProductDisc;
