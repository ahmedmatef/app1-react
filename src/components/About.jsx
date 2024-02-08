import React from "react";

export default function About() {
  return (
    <>
      <main>
        <div className="container d-flex align-items-center justify-content-center flex-column vh-100  text-white">
          <h2 className="fw-bold fs-1">ABOUT COMPONENT</h2>
          <div className="py-3 star-container position-relative w-50 text-center">
            <i className="fa-solid fa-star position-relative w-100"></i>
          </div>
          <div className="row px-5">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
