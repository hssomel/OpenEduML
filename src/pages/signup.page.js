import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import PaymentIcon from "@material-ui/icons/Payment";
import Code from "@material-ui/icons/Code";
import Email from "@material-ui/icons/Email";
import NavbarMain from "components/Navbars/navbar.component.js";
import Background from "../assets/img/login-background.png";
import GridContainer from "components/proTheme/Grid/GridContainer.js";
import GridItem from "components/proTheme/Grid/GridItem.js";
import Button from "components/proTheme/CustomButtons/Button.js";
import Card from "components/proTheme/Card/Card.js";
import CardBody from "components/proTheme/Card/CardBody.js";
import InfoArea from "components/proTheme/InfoArea/InfoArea.js";
import CustomInput from "components/proTheme/CustomInput/CustomInput.js";
import { connect } from "react-redux";
import AlertDialog from "components/SignInSignOut/AlertDialog";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import {
  clearLoginMessage,
  clearLoginHeader,
  setLoginMessage,
  setLoginHeader,
} from "../redux/alerts/alerts.actions";
import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

const SignUpPage = ({
  setLoginMessage,
  setLoginHeader,
  clearLoginHeader,
  clearLoginMessage,
  loginHeader,
  loginMessage,
  match,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  // LIFE CYCLE METHODS
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setLoginMessage({
        type: "error",
        message: err.message,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    var actionCodeSettings = {
      url: "http://192.168.4.26:3000/signin/finish123",
      handleCodeInApp: true,
    };

    try {
      await auth.sendSignInLinkToEmail(email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setLoginMessage({
        type: "success",
        message: "Please check your email!",
      });
      // setLoginMessage("Successfully sent link to email");
      setLoginHeader("Please check your email");
      setEmail("");
    } catch (err) {
      setEmail("");
      setLoginMessage({
        type: "error",
        message: err.message,
      });
    }
  };

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
      // alert(err.message);
    }
  };

  useEffect(() => {
    emailLinkComplete();
  }, []);

  let loginDescription =
    "You may choose to login/create an account using either Google Sign In." +
    " Or you may enter your email address and OpenEduML will email you a verification" +
    " link. ";

  let consoleDescription =
    "Access your very own console page! " +
    "You will be able to access your online Jupyter Notebook and be able to view your usage " +
    "history and explore all our different subscription plans!";

  let paymentDescription =
    "The console page shows on the dashboard how many days are left in your free trial! " +
    "Explore the payments page to view  additional details " +
    "on the benefits of upgrading to our Plus or Pro tiers.";

  return (
    <div>
      <NavbarMain route={match} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle} style={{ marginBottom: 24 }}>
                  Login/Register
                </h2>
                <CardBody>
                  <Grid container style={{ justifyContent: "space-evenly" }}>
                    <Grid item xs={12} sm={5} md={5} style={{ paddingRight: 15 }}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Only Email Required"
                        description={loginDescription}
                        icon={Email}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Access the Console"
                        description={consoleDescription}
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Explore Different Plans"
                        description={paymentDescription}
                        icon={PaymentIcon}
                        iconColor="info"
                      />
                    </Grid>
                    <Grid item xs={12} sm={5} md={5} style={{ paddingTop: 40 }}>
                      <div className={classes.textCenter}>
                        <Button justIcon round color="dribbble">
                          <i
                            className={classes.socials + " fab fa-google"}
                            onClick={(e) => handleGoogleSignIn(e)}
                          />
                        </Button>

                        <h4
                          className={classes.socialTitle}
                          style={{ fontFamily: "Roboto", fontWeight: 200, fontSize: 18 }}
                        >
                          or Login/Register with Email
                        </h4>
                      </div>
                      <form className={classes.form} onSubmit={handleFormSubmit}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email...",
                            onChange: (e) => handleEmailChange(e),
                          }}
                        />

                        <div className={classes.textCenter}>
                          <Button round color="primary" type="submit">
                            Get started
                          </Button>
                        </div>
                      </form>
                      <div
                        className="pull-right"
                        style={{
                          paddingRight: 10,
                          bottom: "20px",
                          position: "absolute",
                          right: "20px",
                        }}
                      >
                        <h6>
                          <a className="link" href="/contact" style={{ fontFamily: "Roboto" }}>
                            Need Help?
                          </a>
                        </h6>
                      </div>
                    </Grid>
                  </Grid>
                </CardBody>
              </Card>
            </GridItem>
            <AlertDialog
              onCloseFunction={clearMessages}
              open={loginMessage ? true : false}
              message={loginMessage}
              header={loginHeader}
            />
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginMessage: state.alerts.loginMessage,
  loginHeader: state.alerts.loginHeader,
});

export default connect(mapStateToProps, {
  setLoginMessage,
  setLoginHeader,
  clearLoginMessage,
  clearLoginHeader,
})(SignUpPage);
