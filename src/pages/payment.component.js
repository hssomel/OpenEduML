import React, { useState, useEffect } from "react";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Sidebar from "../components/Sidebar/Sidebar.js";
import Pricing from "components/Pricing/Pricing";
import routes from "../routes/routes.js";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";

let ps;
const useStyles = makeStyles(styles);

const PaymentPage = ({ ...rest }) => {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image] = useState(bgImage);
  const [color] = useState("blue");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth <= 1360) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  //
  return (
    <div className={classes.wrapper} style={{ backgroundColor: "#eeeeee" }}>
      <Sidebar
        routes={routes}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <div className={classes.content}>
          <div className={classes.container}>
            <Pricing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
