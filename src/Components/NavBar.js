import React from "react";
import "./Navbar.css";

import { HashLink as Link } from "react-router-hash-link";
import SignUpModal from "./SignUpModal";
const navBar = () => {
  const Navigation = [
    { title: "Mindarch" },
    { title: "Home", path: "/" },
    { title: "About", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Cases", path: "#cases" },
  ];

  return (
    <div className="Navbar">
      <ul className="main-nav">
        {Navigation.map((item, idx) => {
          return (
            <li key={idx} className="nav-item">
              <Link smooth to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <SignUpModal />
        </li>
      </ul>
    </div>
  );
};

export default navBar;
