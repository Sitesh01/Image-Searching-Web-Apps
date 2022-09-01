import React from "react";
import "./css/Footer.css";
const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="container mt-2">
        <div className="row text-center">
          <div className="col-sm-6 col-md-4 py-2">
            <h5 className="mb-2 h5">Developers</h5>
            <p>
              <ul className="mt-0 p-0">
                <li>Sitesh Kumar Bhandary</li>
                <li>Gulshan Kumar Nirala</li>
                <li>Tajuddin Ali</li>
                <li>Saumya Pandey</li>
              </ul>
            </p>
          </div>
          <div className="col-sm-6 col-md-4 py-2">
            <h5 className="mb-2 h5">Email</h5>
            <p>
              <ul className="mt-0 p-0">
                <li>1905933@kiit.ac.in</li>
                <li>1928231@kiit.ac.in</li>
                <li>1928067@kiit.ac.in</li>
                <li>1905809@kiit.ac.in</li>
              </ul>
            </p>
          </div>
          <div className="col-sm-6 col-md-4 py-2">
            <h5 className="mb-2 h5">Roll No.</h5>
            <p>
              <ul className="mt-0 p-0">
                <li>1905933</li>
                <li>1928231</li>
                <li>1928067</li>
                <li>1905809</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-3 ">
            <small>@copyright Minor Project, KIIT 🧪🥼</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
