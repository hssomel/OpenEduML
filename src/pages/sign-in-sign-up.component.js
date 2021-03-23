import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
// core components
import NavbarMain from "../components/Navbars/navbar.component.js";
import LoginForm from "../components/login-form.component";
import RegisterForm from "../components/register-form.component";
import GenericModal from "../components/generic-modal.component";
// import TransparentFooter from "components/Footers/TransparentFooter.js";
import Background from "../assets/img/login-background.png";
import { clearLoginError } from "../redux/alerts/alerts.actions";

const SignInSignUpPage = ({ loginError, clearLoginError }) => {
  // Lifecycle events
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
            {loginError && (
              <GenericModal
                messageBody={loginError}
                onCloseFunction={clearLoginError}
                bVariant="danger"
              />
            )}
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

const mapStateToProps = (state) => ({
  loginError: state.alerts.loginError,
});

export default connect(mapStateToProps, { clearLoginError })(SignInSignUpPage);
