import React from "react";

const Section6 = () => {
  return (
    <>
      <div className="section6">
        <div className="section6-inside-div bg-light">
          <div className="section6-image">
            <img
              src="images/contactus.png"
              className="img-fluid"
              alt="contact-us"
            />
          </div>
          <div className="right-half">
            <p className="heading">Subscribe to our Newsletter!</p>
            <p className="second-text">
              Be the first to get exclusive offers ands the latest news
            </p>
            <form>
                <input type="text" placeholder="Enter your email address" />
            </form>
            <button className="header-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
