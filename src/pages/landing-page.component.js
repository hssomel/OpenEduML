import React, { useEffect, useState } from "react";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import NavbarMain from "../components/Navbars/navbar.component.js";
import LandingPageHeader from "../components/Headers/landing-header.component";

const LandingPage = () => {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
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
        <LandingPageHeader />
      </div>
    </>
  );
};

export default LandingPage;
