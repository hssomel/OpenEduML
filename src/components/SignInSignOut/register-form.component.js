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
import { auth } from "../../firebase/firebase.utils";
import { setLoginMessage, setLoginHeader } from "../../redux/alerts/alerts.actions";

const RegisterForm = ({ setLoginMessage, setLoginHeader }) => {
  const [focus, setFocus] = useState(false);
  const [email, setEmail] = useState("");
  // EVENT HANDLERS -------------------------------------------------------->
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    var actionCodeSettings = {
      url: "http://192.168.4.26:3000/signin/finish123",
      handleCodeInApp: true,
    };
    try {
      await auth.sendSignInLinkToEmail(email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setLoginMessage("Successfully sent link to email");
    } catch (error) {
      setEmail("");
      console.log(error);
      setLoginMessage(error.message);
    }
  };
  // -------------------------------------------------------------------------------->
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
            <h4 style={{ fontWeight: 700 }}>CREATE A NEW ACCOUNT</h4>
          </CardHeader>
          <CardBody>
            <InputGroup
              className={"no-border input-lg" + (focus ? " input-group-focus" : "")}
              autoComplete="off"
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons business_briefcase-24"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email..."
                type="text"
                autoComplete="off"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={(e) => handleEmailChange(e)}
                value={email}
              ></Input>
            </InputGroup>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              block
              className="btn-round"
              style={{ backgroundColor: "#9c27b0" }}
              onClick={(e) => handleRegisterSubmit(e)}
              size="lg"
            >
              REGISTER
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

export default connect(mapStateToProps, { setLoginMessage, setLoginHeader })(RegisterForm);
