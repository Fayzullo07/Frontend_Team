import React from 'react'

const Rating = ({ value, reviews }) => {
  return (
    <td>
      <div className="d-flex align-items-center my0">
        <ul className="rating my-0">
          <li>
            <i
              className={
                value >= 1
                  ? "fas fa-star theme-color"
                  : value >= 0.5
                  ? "fas fa-star-half-alt theme-color"
                  : "far fa-star"
              }
            ></i>
          </li>
          <li>
            <i
              className={
                value >= 2
                  ? "fas fa-star theme-color"
                  : value >= 1.5
                  ? "fas fa-star-half-alt theme-color"
                  : "far fa-star"
              }
            ></i>
          </li>
          <li>
            <i
              className={
                value >= 3
                  ? "fas fa-star theme-color"
                  : value >= 2.5
                  ? "fas fa-star-half-alt theme-color"
                  : "far fa-star"
              }
            ></i>
          </li>
          <li>
            <i
              className={
                value >= 4
                  ? "fas fa-star theme-color"
                  : value >= 3.5
                  ? "fas fa-star-half-alt theme-color"
                  : "far fa-star"
              }
            ></i>
          </li>
          <li>
            <i
              className={
                value >= 5
                  ? "fas fa-star theme-color"
                  : value >= 4.5
                  ? "fas fa-star-half-alt theme-color"
                  : "far fa-star"
              }
            ></i>
          </li>
        </ul>

        <span className="font-light ms-2">({reviews} reviews)</span>
      </div>
    </td>
  );
};

export default Rating
