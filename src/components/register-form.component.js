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

const RegisterForm = () => {
  const [firstFocus, setfirstFocus] = useState(false);
  const [secondFocus, setsecondFocus] = useState(false);
  const [thirdFocus, setthirdFocus] = useState(false);
  const [fourthFocus, setfourthFocus] = useState(false);
  //

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
            <h4 style={{ fontWeight: 700 }}>CRsEATE A NEW ACCOUNT</h4>
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
                onFocus={() => setfirstFocus(true)}
                onBlur={() => setfirstFocus(false)}
              ></Input>
            </InputGroup>
            <InputGroup
              className={
                "no-border input-lg" + (secondFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons business_briefcase-24"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email..."
                type="text"
                onFocus={() => setsecondFocus(true)}
                onBlur={() => setsecondFocus(false)}
              ></Input>
            </InputGroup>
            <InputGroup
              className={
                "no-border input-lg" + (thirdFocus ? " input-group-focus" : "")
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
                onFocus={() => setthirdFocus(true)}
                onBlur={() => setthirdFocus(false)}
              ></Input>
            </InputGroup>
            <InputGroup
              className={
                "no-border input-lg" + (fourthFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Confirm Password..."
                type="text"
                onFocus={() => setfourthFocus(true)}
                onBlur={() => setfourthFocus(false)}
              ></Input>
            </InputGroup>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              block
              className="btn-round"
              style={{ backgroundColor: "#9c27b0" }}
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              REGISTER
            </Button>

            <div className="pull-right">
              <h6>
                <a className="link" onClick={(e) => e.preventDefault()}>
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

export default RegisterForm;
