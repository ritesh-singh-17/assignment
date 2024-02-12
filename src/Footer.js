import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer row">
        <div className="division col-lg-3 col-md-6">
          <div className="footer-icon">
            <img src="images/logofooter.png" alt="logo" />
          </div>
          <p>Lorem Ipsum is simply dummy of the printing and type setting.</p>
          <div className="stores-buttons">
            <img src="images/btns.png" alt="logo" />
          </div>
        </div>
        <div className="division">
          <div className='footer-heading'>COMPANY</div>
          <p><IoMdArrowDropright /> About Us</p>
          <p><IoMdArrowDropright /> Privacy Policy</p>
          <p><IoMdArrowDropright /> Terms</p>
          <p><IoMdArrowDropright /> Blogs</p>
          <p><IoMdArrowDropright /> Branding</p>
          <p><IoMdArrowDropright /> Career</p>
        </div>
        <div className="division">
          <div className='footer-heading'>GENERAL</div>
          <p><IoMdArrowDropright /> Partner With Us</p>
          <p><IoMdArrowDropright /> Write to us</p>
          <p><IoMdArrowDropright /> Mobile App</p>
          <p><IoMdArrowDropright /> Site map</p>
        </div>
        <div className="division">
          <div className='footer-heading'>PAGES</div>
          <p><IoMdArrowDropright /> Amazon Offer</p>
          <p><IoMdArrowDropright /> Google Pay Offers</p>
          <p><IoMdArrowDropright /> PayPal Offers</p>
          <p><IoMdArrowDropright /> PhonePe Offers</p>
          <p><IoMdArrowDropright /> Festival Offers</p>
          <p><IoMdArrowDropright /> Bank Offers</p>
        </div>
      <div className="division">
          <div className='footer-heading'>MORE</div>
          <p><IoMdArrowDropright /> City Offers</p>
          <p><IoMdArrowDropright /> Brand Offers</p>
          <p><IoMdArrowDropright /> Product Offers</p>
          <p><IoMdArrowDropright /> Gifts Offers</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
