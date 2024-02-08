import React from "react";

export default function contact() {
  return (
    <>
      <section>
        <div className="container min-vh-100 p-5">
          <div className="portfolio-header d-flex align-items-center justify-content-center flex-column py-4">
            <h2 className="fw-bold fs-1">CONATCT SECTION</h2>
            <div className="py-3 star-container position-relative w-50 port-contain text-center">
              <i className="port-icon fa-solid fa-star position-relative w-100"></i>
            </div>
          </div>
          <form className="p-5 d-flex align-items-center justify-content-center flex-column">
            <input
              className="form-control mb-5"
              type="text"
              placeholder="userName"
            />
            <input
              className="form-control mb-5"
              type="number"
              placeholder="userAge"
            />
            <input
              className="form-control mb-5"
              type="email"
              placeholder="userEmail"
            />
            <input
              className="form-control mb-5"
              type="password"
              placeholder="userPassword"
            />

            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
