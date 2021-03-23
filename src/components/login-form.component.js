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
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

const LoginForm = () => {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setEmail("");
      setPassword("");
      console.log("error");
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("SUCCESS WITH GOOGLE");
    } catch (err) {
      console.log("oops error");
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
        }}
      >
        <Form action="" className="form" method="">
          <CardHeader className="text-center">
            <h4 style={{ fontWeight: 700 }}>LOG BACK IN</h4>
          </CardHeader>
          <CardBody>
            <InputGroup
              className={
                "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
              }
            >
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
            {/* */}
            <InputGroup
              className={
                "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password..."
                type="text"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
                onChange={(e) => handlePasswordChange(e)}
                value={password}
              ></Input>
            </InputGroup>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              block
              className="btn-round"
              style={{ color: "#9c27b0" }}
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
            <div className="pull-right">
              <h6>
                <a
                  className="link"
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
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

export default LoginForm;
