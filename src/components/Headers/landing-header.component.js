import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Background from "../../assets/img/openedu.png";
//
const LandingPageHeader = () => {
  let pageHeader = React.createRef();

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${Background})`,
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title" style={{ marginTop: 0 }}>
              Welcome to OpenEduML
            </h1>
            <h3 className="title">
              Built by data-science students for data-science students
            </h3>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingPageHeader;
