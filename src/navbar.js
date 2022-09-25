import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SignUpPage from "../src/SignUpPage";

const Navbar = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const navigateToSignUpPage = () => {
    navigate("SignUpPage");
  };

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              TopSecretProject
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <button
                  class="btn  btn-style"
                  type="submit"
                  onClick={navigateToSignUpPage}
                >
                  Sign Up
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
