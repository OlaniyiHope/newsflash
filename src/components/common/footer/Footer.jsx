import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <p>
              Discussion is an amazing Blog that helps you learn about whats
              trending and also keep a smile on your face
            </p>
            <i className="fa fa-envelope"></i>
            <span> olaniyihoppee@gmail.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +234 703 841 2640</span>
          </div>
          <div className="box">
            <h3>CATEGORIES</h3>
            <h3>Sport</h3>
            <h3>Tech</h3>
            <h3>Memes</h3>
            <h3>Music</h3>
          </div>

          <div className="box">
            <h3>Informations</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>Become a member</li>
              <li>Become a meme lord</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>trend.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
