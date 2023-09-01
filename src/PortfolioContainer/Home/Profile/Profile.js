import React from "react";
import "./Profile.css";
export default function Profie() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
          <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            <a href="https://www.linkedin.com/in/sachin-pal-4a2884253/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/sachingramram">
            <i className="fa fa-github"></i>
            </a>
            </div>
          </div>
        
      <div className="profile-details-name">
        <span className="primary-text">
          {" "}
          Hello, I'M <span className="highlighted-text">Sachin</span>
        </span>
      </div>
      <div className='profile-details-role'>
        <span className='primary text'>
          {" "}
          <h1>
            {" "}
        </h1>
        <sapn className='profile-role-tagline'>
          Knack of building applications with front and back end operations.
        </sapn>
        </span>
      </div>
      <div className='profile-options'>
        <button className='btn primary-btn'>
          {""}
          Hire Me{" "}
        </button>
        <a href='myresume.pdf' download='Sachin myresume.pdf'>
          <button className="btn highlighted-btn">Get Resume</button>
        </a>
      </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
      </div>
    </div>
  );
}
