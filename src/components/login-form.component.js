import React, { useState } from "react";

// reactstrap components
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

const LoginForm = () => {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);

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
                placeholder="Username..."
                type="text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
              ></Input>
            </InputGroup>
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
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              LOGIN
            </Button>
            <p>or</p>
            <Button
              block
              className="btn-round"
              style={{ backgroundColor: "#9c27b0" }}
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              SIGN IN WITH GOOGLE
            </Button>
            <div className="pull-right">
              <h6>
                <a
                  className="link"
                  href="#pablo"
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
