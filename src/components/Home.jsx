import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <div className="container d-flex align-items-center justify-content-center flex-column vh-100  text-white">
          <img
            src="../images/avataaars.svg"
            className="w-50 h-50 mb-3"
            alt=""
          />
          <h2 className="fw-bold fs-1">START FRAMEWORK</h2>
          <div className="py-3 star-container position-relative w-50 text-center">
            <i className="fa-solid fa-star position-relative w-100"></i>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </main>
    </>
  );
}
