import React from "react";
import "./Header.css";
import HeaderLady from "../Images/Header-lady.png";
import HeaderBox from "../Images/Rectangle 80.png";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Navbar />
      <div className="header-box">
        <div className="cover">
          <h2 className="header">
            <span>Perfect solution for your mind</span>Find A Therapist{" "}
          </h2>
          <p>
            It's your life to live. Lets work together to help you find out who
            you are and what
            <br /> matters to you as an individual
          </p>

          <div className="Button">
            <Button color={"green"} text={"Make an Appointment"} />
          </div>
        </div>

        <div className="header-images">
          <img className="first" src={HeaderBox} alt="headerBox" />
          <img
            style={{ width: "250px" }}
            className="second"
            src={HeaderLady}
            alt="headerlady"
          />
        </div>
      </div>
      <Outlet />
    </div>
      
  );
};

export default Header;
