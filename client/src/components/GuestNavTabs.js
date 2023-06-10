import React from "react";
import "./navbar.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <section className="header">
      <h1><b>Hiking Trails</b></h1>
      <ul
        className="nav nav-tabs"
        style={{
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#signup"
            onClick={() => handlePageChange("Signup")}
            className={
              currentPage === "Signup" ? "nav-link active" : "nav-link"
            }
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Signup
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#login"
            onClick={() => handlePageChange("Login")}
            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Login
          </a>
        </li>        
        <li className="nav-item">
          <a
            href="#trails"
            onClick={() => handlePageChange("Trails")}
            className={
              currentPage === "Trails" ? "nav-link active" : "nav-link"
            }
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Trails
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;
