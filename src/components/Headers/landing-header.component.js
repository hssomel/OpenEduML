import React from "react";
import { Container } from "reactstrap";
import Background from "../../assets/img/openedu.png";
//
const LandingPageHeader = () => {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title" style={{ marginTop: 0 }}>
              Welcome to OpenEduML
            </h1>
            <h3 className="title">Built by data-science students for data-science students</h3>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingPageHeader;
