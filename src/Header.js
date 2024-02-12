import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <nav className="top-header bg-body-light">
        <div className="container">
          <div className="">
            <div className="top-header-items">
              <div className="nav-item">
                <a className="navbar-brand" href="/">
                  <img src="images/logo.png" className="img-fluid" alt="header-image" />
                </a>
              </div>
              <div className="nav-item">
                <form className="header-form">
                  <IoSearchOutline />
                  <input
                    type="text"
                    placeholder="Search For brand, category, coupon"
                  />
                </form>
              </div>
              <div className="nav-item">
                <button className="header-button"> Login/Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        /
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Deals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Coupon</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Stores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
