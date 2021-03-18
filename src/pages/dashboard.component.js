import React from "react";

// core components
import NavbarMain from "../components/Navbars/navbar.component.js";
// import TransparentFooter from "components/Footers/TransparentFooter.js";
import Background from "../assets/img/login-background.png";

const DashBoardPage = () => {
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
        <h3>Dashboard Page</h3>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
};

export default DashBoardPage;
