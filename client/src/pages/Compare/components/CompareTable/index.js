import React from "react";
import { Link } from "react-router-dom";
import { compare } from "../../../../data/dummydata";
import ImagesTdRow from "../ImagesTdRow";
import Rating from "../Rating";

const CompareTable = () => {
  return (
    <section className="section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="comparemodal-body">
              <div className="table-wrapper table-responsive ratio_asos">
                <table className="table table-striped-1">
                  <tbody>
                    <tr className="table-product-details">
                      <td></td>
                      {compare.map((item) => (
                        <ImagesTdRow item={item} />
                      ))}
                    </tr>

                    <tr className="table-cart-button">
                      <td></td>
                      {compare.map((item) => (
                        <td key={item.id}>
                          <Link to="/cart" className="btn btn-solid-blue">
                            + Add to cart
                          </Link>
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td>Customer Rating</td>
                      {compare.map((item) => (
                        <Rating value={item.rating} reviews={item.reviews} />
                      ))}
                    </tr>

                    <tr>
                      <td>BRAND</td>
                      {compare.map((item) => (
                        <td>{item.brand}</td>
                      ))}
                    </tr>

                    <tr>
                      <td>Generic Name</td>
                      {compare.map((item) => (
                        <td>{item.GenericName}</td>
                      ))}
                    </tr>

                    <tr>
                      <td>Department</td>
                      {compare.map((item) => (
                        <td>{item.Department}</td>
                      ))}
                    </tr>

                    <tr>
                      <td>Manufacturer</td>
                      {compare.map((item) => (
                        <td>{item.Manufacturer}</td>
                      ))}
                    </tr>

                    <tr>
                      <td>color</td>
                      {compare.map((item) => (
                        <td>{item.color}</td>
                      ))}
                    </tr>

                    <tr>
                      <td>Date First Available</td>
                      {compare.map((item) => (
                        <td>{item.DateFirstAvailable}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
