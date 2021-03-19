import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
// core components
import NavbarMain from "../components/Navbars/navbar.component.js";
import LoginForm from "../components/login-form.component";
import RegisterForm from "../components/register-form.component";
// import TransparentFooter from "components/Footers/TransparentFooter.js";
import Background from "../assets/img/login-background.png";

const SignInSignUpPage = () => {
  useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavbarMain />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        ></div>
        <div className="content">
          <Container>
            <Row style={{ paddingTop: 25 }}>
              <Col className="ml-auto mr-auto" md="5">
                <LoginForm />
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <RegisterForm />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
};

export default SignInSignUpPage;
