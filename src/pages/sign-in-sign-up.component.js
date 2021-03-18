import React, { useEffect, useState } from "react";
// reactstrap components

// core components
import NavbarMain from "../components/Navbars/navbar.component.js";

const SignInSignUpPage = () => {
  //   lifecycle methods
  useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavbarMain />
      <div className="wrapper">
        <h3>Sign in Sign up</h3>
      </div>
    </>
  );
};

export default SignInSignUpPage;
