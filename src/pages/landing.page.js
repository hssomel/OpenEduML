import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import NavbarMain from "components/Navbars/navbar.component.js";
import LandingPageHeader from "../components/Headers/landing-header.component";
import Image1 from "../assets/img/jupyter1a.jpeg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ReactComponent as Logo2 } from "../assets/img/JupyterHub.svg";
import { ReactComponent as Logo3 } from "../assets/img/Jupyter-Notebook.svg";
import FooterHome from "components/Footer/FooterHome.js";

const LandingPage = () => {
  //   lifecycle methods
  useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavbarMain />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row style={{ paddingBottom: 20 }}>
              <Col className="ml-auto mr-auto text-center" md="9">
                <h3 className="title" style={{ fontFamily: "Roboto Slab" }}>
                  A handy online environment for building, training, and testing machine-learning
                  models
                </h3>
                <h5 className="description" style={{ color: "black" }}>
                  OpenEduML is created by graduate students at the University of Texas, Austin who
                  are aspiring data scientists and AI researchers. Our mission is to provide an
                  online environment (utilizing the familiar Jupyter Notebooks) for students to run
                  machine-learning/data-science workloads without worrying about installing software
                  package and GPU management on their local computers. OpenEduML is designed to
                  accomodate a wide range of use cases; whether you are a graduate student looking
                  to complete a machine-learning assignment, or an experienced data scientist
                  looking to train your machine-learning models for several hours per week! We offer
                  a complimentary free trial plan as well as more premium options!
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{ backgroundImage: `url(${Image1})`, height: 380 }}
                  ></div>
                  <h3 style={{ marginTop: 65, fontFamily: "Roboto Slab" }}>
                    OpenEduML leverages JupyterHub
                  </h3>
                  <p>
                    You may have previously already accessed Jupyter Notebooks online or found that
                    when you installed Jupyter Notebooks locally, you were only limited to launch
                    python kernels from your notebook. OpenEduML seeks to eliminate that and provide
                    access to a wide array of kernels you can launch (such has Python 3.6 w/
                    Tensorflow or R, Scala, etc.). Your online Jupyter Notebook will be connected to
                    OpenEduML's deployment of Jupyterhub which will provide you with access to all
                    the latest popular machine learning workloads with just the click of a button!
                    Let us worry about maintaining the latest kernels and also let us provide you
                    with kernels that have popular libraries like Tensorflow already installed!
                  </p>
                  <div>
                    <Logo3
                      className="image-container"
                      style={{
                        width: "120%",
                        height: 520,
                        paddingRight: 36,
                        marginTop: 60,
                      }}
                    />
                  </div>
                </Col>
                <Col md="6" style={{ paddingLeft: 36, paddingTop: 20 }}>
                  <h3 style={{ fontFamily: "Roboto Slab" }}>
                    Unlock the full power of Jupyter Notebooks simply via Internet
                  </h3>
                  <p>
                    As data scientists, we all at somepoint have come across Jupyter Notebooks and
                    may have even downloaded Jupyter software locally on our computer. OpenEduML is
                    designed to conveniently host your Jupyter Notebook on our cloud infrastructure
                    so you no longer have to worry about staying up to date with all the software
                    and hardware updates to continue running your workloads! Rest assured your
                    online Jupyter Notebook and all the workloads saved on it are backed up securely
                    on our cloud so you can access your machine-learning workflow on any device from
                    anywhere with an internet connection!
                  </p>

                  <Logo2
                    className="image-container"
                    style={{
                      width: "80%",
                      marginLeft: 30,
                      marginTop: 120,
                      height: 260,
                    }}
                  />

                  <div style={{ paddingLeft: 100 }}>
                    <h3 style={{ fontFamily: "Roboto Slab", marginTop: 100 }}>
                      A familiar IDE environment with the following kernels:
                    </h3>
                    <p>
                      OpenEduML provides the following kernels listed and will expand this list with
                      future popular machine learning libraries:
                    </p>
                    <ul style={{ paddingLeft: 16 }}>
                      <li style={{ fontSize: 16, paddingTop: 15 }}>R</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>python</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>python_tenserflow_gpu</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>python_tenserflow</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>scala</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>spark_R</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>spark_python</li>
                      <li style={{ fontSize: 16, paddingTop: 8 }}>spark_scala</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row style={{ paddingTop: 80 }}>
                <Col className="ml-auto mr-auto text-center" md="10">
                  <h3 className="title" style={{ fontFamily: "Roboto Slab" }}>
                    Ready to start your free trial?
                  </h3>
                  <h5 className="description" style={{ color: "black" }}>
                    OpenEduML is proud to offer all new members a 30 day complimentary free trial
                    for our free tier subscription! This will allow you to launch multiple different
                    machine learning kernels as well as allow you to save your work online for 30
                    days! OpenEduML strives to offer extremely affordable rates for all backgrounds!
                    Sign up for an account today to get started!
                  </h5>
                  <Link to="/signin" style={{ color: "white" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#f6a4eb",
                        color: "white",
                        width: "50%",
                        minHeight: "50px",
                        alignSelf: "center",
                        marginTop: 32,
                        fontSize: 16,
                        fontWeight: 700,
                      }}
                    >
                      SIGN UP FOR AN ACCOUNT
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <FooterHome />
    </>
  );
};

export default LandingPage;
