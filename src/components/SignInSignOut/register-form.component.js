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
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { setLoginError } from "../../redux/alerts/alerts.actions";

const RegisterForm = ({ setLoginError }) => {
  const [firstFocus, setfirstFocus] = useState(false);
  const [secondFocus, setsecondFocus] = useState(false);
  const [thirdFocus, setthirdFocus] = useState(false);
  const [fourthFocus, setfourthFocus] = useState(false);
  // FORM STATE
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // EVENT HANDLERS -------------------------------------------------------->
  const handleNameChange = (event) => {
    let { value } = event.target;
    value = value.replace(/[^A-Za-z]/gi, "");
    setDisplayName(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleCPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };
  //
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setLoginError("Passwords don't match");
      return;
    }

    if (displayName.length < 8) {
      setLoginError("Please set Username to atleast 8 characters with only letters.");
      return;
    }

    if (password.length < 8) {
      setLoginError("Please set password to atleast 8 characters.");
      return;
    }

    if (password.search(/[a-z]/) < 1) {
      setLoginError("Your password must contain at least one lowercase letter.");
      return;
    }

    if (password.search(/[A-Z]/) < 1) {
      setLoginError("Your password must contain at least one uppercase letters.");
      return;
    }

    if (password.search(/[!@#$%^&*]/) < 1) {
      setLoginError("Your password must contain at least one special character.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      console.log(error);
      setLoginError(error.message);
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
              className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")}
              autoComplete="off"
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_circle-08"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Username..."
                type="text"
                onFocus={() => setfirstFocus(true)}
                onBlur={() => setfirstFocus(false)}
                onChange={(e) => handleNameChange(e)}
                value={displayName}
                minLength="8"
              ></Input>
            </InputGroup>
            <InputGroup
              className={"no-border input-lg" + (secondFocus ? " input-group-focus" : "")}
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
                onFocus={() => setsecondFocus(true)}
                onBlur={() => setsecondFocus(false)}
                onChange={(e) => handleEmailChange(e)}
                value={email}
              ></Input>
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (thirdFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password..."
                type="password"
                onFocus={() => setthirdFocus(true)}
                onBlur={() => setthirdFocus(false)}
                onChange={(e) => handlePasswordChange(e)}
                value={password}
                minLength="8"
              ></Input>
            </InputGroup>
            <InputGroup
              className={"no-border input-lg" + (fourthFocus ? " input-group-focus" : "")}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Confirm Password..."
                type="password"
                onFocus={() => setfourthFocus(true)}
                onBlur={() => setfourthFocus(false)}
                onChange={(e) => handleCPasswordChange(e)}
                value={confirmPassword}
                minLength="8"
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

export default connect(mapStateToProps, { setLoginError })(RegisterForm);
