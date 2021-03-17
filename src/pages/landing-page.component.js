import React, { useEffect, useState } from "react";
// reactstrap components
import {
  Button,
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
import LandingPageHeader from "../components/Headers/landing-header.component";
import { ReactComponent as Logo } from "../assets/img/diagram-one.svg";
import { ReactComponent as Logo2 } from "../assets/img/JupyterHub.svg";
import { ReactComponent as Logo3 } from "../assets/img/Jupyter-Notebook.svg";

const LandingPage = () => {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
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
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <h2 className="title">
                  Build, train, and test machine-learning models
                </h2>
                <h5 className="description" style={{ color: "black" }}>
                  OpenEduML is an online platform that provides cloud
                  infrastructure for efficiently running data-science workloads.
                  KubeML provides clients access to a fully-managed cluster
                  hosted on cloud infrastructure. The KubeML team provides an
                  online IDE powered by Jupyter Notebooks connected to a gateway
                  which leverages kubernetes to efficiently distribute
                  individual kernels across the cluster
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div className="image-container">
                    <Logo
                      className="image-container"
                      style={{ width: "100%" }}
                    />
                    <h3 style={{ marginTop: 65 }}>
                      Powered by Jupyter Notebooks
                    </h3>
                    <p>
                      OpenEduML utilizes Jupyter's open-source platform and
                      integrates JupyterHub with Jupyter Enterprise Gateway.
                      Jupyterhub provides clients with a frontend UI to manage
                      users and takes care of instantiating notebook server
                      instances for each user. Each individual notebook instance
                      is then able to launch multiple kernels distributed
                      efficiently across the cluster when connected to
                      Enterprise Gateway
                    </p>
                  </div>
                  <Logo3
                    className="image-container"
                    style={{
                      width: "120%",
                      height: 520,
                    }}
                  />
                </Col>
                <Col md="6" style={{ paddingLeft: 36 }}>
                  <h3>
                    OpenEduML is an online platform that provides cloud
                    infrastructure for efficiently running data-science
                    workloads.
                  </h3>
                  <p>
                    OpenEduML provides clients access to a fully-managed cluster
                    hosted on cloud infrastructure. The OpenEduML team provides
                    an online IDE powered by Jupyter Notebooks connected to a
                    gateway which leverages kubernetes to efficiently distribute
                    individual kernels across the cluster
                  </p>

                  <Logo2
                    className="image-container"
                    style={{
                      width: "80%",
                      marginLeft: 50,
                      marginTop: 55,
                      height: 300,
                    }}
                  />
                  <h3 style={{ marginTop: 100 }}>
                    A familiar IDE environment for your development team
                  </h3>
                  <p>OpenEduML provides the following kernels:</p>
                  <ul style={{ paddingLeft: 16 }}>
                    <li>R</li>
                    <li>python</li>
                    <li>python_tenserflow_gpu</li>
                    <li>python_tenserflow</li>
                    <li>scala</li>
                    <li>spark_R</li>
                    <li>spark_python</li>
                    <li>spark_scala</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
