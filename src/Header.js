import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <nav class="top-header bg-body-light">
        <div class="container">
          <div className="">
            <div class="top-header-items">
              <div className="nav-item">
                <a class="navbar-brand" href="#">
                  <img src="images/logo.png" className="img-fluid" />
                </a>
              </div>
              <div class="nav-item">
                <form class="header-form">
                  <IoSearchOutline />
                  <input
                    type="text"
                    placeholder="Search For brand, category, coupon"
                  />
                </form>
              </div>
              <div class="nav-item">
                <button className="header-button"> Login/Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg">
        /
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#">Deals</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#">Coupon</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#">Stores</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
