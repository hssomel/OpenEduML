import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { connect } from "react-redux";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { setLoginMessage, setLoginHeader } from "../../redux/alerts/alerts.actions";

const LoginForm = ({ setLoginMessage, setLoginHeader }) => {
  const [firstFocus, setFirstFocus] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var actionCodeSettings = {
      url: "http://192.168.4.26:3000/signin/finish123",
      handleCodeInApp: true,
    };

    try {
      await auth.sendSignInLinkToEmail(email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setLoginMessage("Successfully sent link to email");
      setEmail("");
    } catch (err) {
      setEmail("");
      setLoginMessage(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setLoginMessage(err.message);
    }
  };

  return (
    <>
      <Card
        className="card-login card-plain"
        style={{
          borderColor: "#9c27b0",
          borderWidth: 2,
          borderStyle: "solid",
          minHeight: 480,
        }}
      >
        <Form action="" className="form" method="">
          <CardHeader className="text-center">
            <h4 style={{ fontWeight: 700 }}>LOG BACK IN</h4>
          </CardHeader>
          <CardBody>
            <InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_circle-08"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email..."
                type="text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
                onChange={(e) => handleEmailChange(e)}
                value={email}
              ></Input>
            </InputGroup>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              block
              className="btn-round"
              style={{ color: "#9c27b0", borderWidth: 2 }}
              outline
              type="button"
              onClick={(e) => handleSubmit(e)}
              size="lg"
            >
              LOGIN
            </Button>
            <p>or</p>
            <Button
              block
              className="btn-round"
              style={{ backgroundColor: "#9c27b0" }}
              onClick={(e) => handleGoogleSignIn(e)}
              size="lg"
            >
              SIGN IN WITH GOOGLE
            </Button>
            <div className="pull-right" style={{ paddingRight: 10 }}>
              <h6>
                <a className="link" href="/contact">
                  Need Help?
                </a>
              </h6>
            </div>
          </CardFooter>
        </Form>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setLoginMessage, setLoginHeader })(LoginForm);
