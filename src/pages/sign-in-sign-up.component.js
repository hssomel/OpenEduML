import React from "react";

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
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NavbarMain from "../components/Navbars/navbar.component.js";
// import TransparentFooter from "components/Footers/TransparentFooter.js";
import Background from "../assets/img/login-background.png";

const SignInSignUpPage = () => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [thirdFocus, setthirdFocus] = React.useState(false);
  const [fourthFocus, setfourthFocus] = React.useState(false);
  const [fifthFocus, setfifthFocus] = React.useState(false);
  const [sixthFocus, setsixthFocus] = React.useState(false);
  React.useEffect(() => {
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
              <Col
                className="ml-auto mr-auto"
                md="5"
                style={{ backgroundColor: "" }}
              >
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
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
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
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
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
                        href="#pablo"
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
              </Col>
              <Col className="ml-auto mr-auto" md="5">
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
                      <h4 style={{ fontWeight: 700 }}>CREATE A NEW ACCOUNT</h4>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (thirdFocus ? " input-group-focus" : "")
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
                          onFocus={() => setthirdFocus(true)}
                          onBlur={() => setthirdFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (fourthFocus ? " input-group-focus" : "")
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
                          onFocus={() => setfourthFocus(true)}
                          onBlur={() => setfourthFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (fifthFocus ? " input-group-focus" : "")
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
                          onFocus={() => setfifthFocus(true)}
                          onBlur={() => setfifthFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (sixthFocus ? " input-group-focus" : "")
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
                          onFocus={() => setsixthFocus(true)}
                          onBlur={() => setsixthFocus(false)}
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        style={{ backgroundColor: "#9c27b0" }}
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        REGISTER
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
