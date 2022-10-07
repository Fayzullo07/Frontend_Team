import React from 'react'
import { Link } from 'react-router-dom';

const Heading = ({title1, title2=title1 }) => {
  return (
    <section className="breadcrumb-section section-b-space">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>{title1}</h3>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="fas fa-home"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title2}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heading
