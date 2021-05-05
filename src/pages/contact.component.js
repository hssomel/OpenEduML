import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Contact from "components/Contact/Contact";
// import Sidebar from "../components/Sidebar/Sidebar.js";
import MiniSideBar from "components/Sidebar/MiniSideBar";
import routes from "../routes/routes.js";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";

const useStyles = makeStyles(styles);

const ContactPage = ({ ...rest }) => {
  const classes = useStyles();
  const mainPanel = React.createRef();
  // states and functions
  const [image] = useState(bgImage);
  const [color] = useState("blue");
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <div className={classes.wrapper} style={{ backgroundColor: "#eeeeee" }}>
      {/* <Sidebar
        routes={routes}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      /> */}
      {/* <MiniSideBar sideOpen={sideOpen} /> */}
      <div className={classes.mainPanel} ref={mainPanel}>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
