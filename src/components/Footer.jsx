import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row g-5 text-white py-5">
            <div className="col-md-4">
              <div className="item text-center p-3">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center p-3">
                <h3>AROUND THE WEB</h3>
                <div className="text-center">
                  <i className="fa-brands fa-facebook-f pe-3"></i>
                  <i className="fa-brands fa-twitter pe-3"></i>
                  <i className="fa-brands fa-linkedin-in pe-3"></i>
                  <i className="fa-solid fa-globe pe-3"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center p-3">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy text-center py-4 text-white">
        Copyright &copy; Your Website 2024
      </div>
    </>
  );
}
