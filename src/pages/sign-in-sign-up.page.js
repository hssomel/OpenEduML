import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import AlertDialog from "components/SignInSignOut/AlertDialog";
import NavbarMain from "components/Navbars/navbar.component.js";
import LoginForm from "../components/SignInSignOut/login-form.component";
import RegisterForm from "../components/SignInSignOut/register-form.component";
import Background from "../assets/img/login-background.png";
import { auth } from "../firebase/firebase.utils";
import { clearLoginMessage, clearLoginHeader } from "../redux/alerts/alerts.actions";

const SignInSignUpPage = ({ loginMessage, loginHeader, clearLoginMessage, clearLoginHeader }) => {
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

  const clearMessages = () => {
    clearLoginHeader();
    clearLoginMessage();
  };

  const emailLinkComplete = async () => {
    try {
      if (auth.isSignInWithEmailLink(window.location.href)) {
        var email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }
        await auth.signInWithEmailLink(email, window.location.href);
        window.localStorage.removeItem("emailForSignIn");
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    emailLinkComplete();
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
            <AlertDialog
              onCloseFunction={clearMessages}
              open={loginMessage ? true : false}
              message={loginMessage}
              header={loginHeader}
            />
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
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginMessage: state.alerts.loginMessage,
  loginHeader: state.alerts.loginHeader,
});

export default connect(mapStateToProps, { clearLoginMessage, clearLoginHeader })(SignInSignUpPage);
