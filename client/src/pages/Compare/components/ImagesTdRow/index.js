import React from 'react'
import { Link } from 'react-router-dom';

const ImagesTdRow = ({item}) => {
  return (
    <td>
      <div className="product-box">
        <div className="product-image">
          <Link className="w-100 blur-up lazyload" to="/javat:void(0)">
            <img
              src={item.image}
              className="img-fluid bg-img blur-up lazyload"
              alt={item.productName}
            />
          </Link>
        </div>
        <div className="product-details">
          <div>
            <Link to="/javat:void(0)">
              <h6 className="fw-bold">{item.productName}</h6>
            </Link>
          </div>

          <div className="price-details mt-2">
            <h6 className="font-green">
              ${item.rightPrice}
              <span className="font-light mx-2">
                ${((item.rightPrice / 100) * item.discount).toFixed(2)}
              </span>
              <span className="theme-color">{item.discount}% off</span>
            </h6>
          </div>
        </div>
      </div>
    </td>
  );
}

export default ImagesTdRow
