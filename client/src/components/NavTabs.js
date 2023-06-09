import React from "react";
import "./navbar.css";

function NavTabs({ currentPage, handlePageChange, setUserId }) {
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
            href="#logout"
            onClick={() => {setUserId(null); handlePageChange("Home")}}
            className={
              currentPage === "Logout" ? "nav-link active" : "nav-link"
            }
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Logout
          </a>
        </li>        
        <li className="nav-item">
          <a
            href="#profile"
            onClick={() => handlePageChange("Profile")}
            className={
              currentPage === "Profile" ? "nav-link active" : "nav-link"
            }
            style={{
              marginRight: "10px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Profile
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
