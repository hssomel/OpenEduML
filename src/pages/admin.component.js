import React, { useState, useEffect, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminNavbar from "components/Navbars/admin.navbar.js";
import Dashboard from "../components/DashBoard/Dashboard.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import routes from "../routes/routes.js";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";

const useStyles = makeStyles(styles);

const AdminPage = () => {
  const classes = useStyles();
  const mainPanel = createRef();
  //
  const [image] = useState(bgImage);
  const [color] = useState("blue");
  const [mobileOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");
  //
  const updateNavColor = () => {
    const inner = document.getElementById("myDiv");
    if (inner.scrollTop > 30) setNavbarColor("info");
    else setNavbarColor("transparent");
  };

  useEffect(() => {
    document.getElementById("myDiv").addEventListener("scroll", updateNavColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavColor);
    };
  }, []);
  //
  return (
    <>
      <div
        className={classes.wrapper}
        style={{ backgroundColor: "#eeeeee", overflowX: "hidden" }}
      >
        <Sidebar
          routes={routes}
          logo={logo}
          image={image}
          open={mobileOpen}
          color={color}
        />
        <AdminNavbar routes={routes} color={navbarColor} />
        <div
          className={classes.mainPanel}
          id="myDiv"
          ref={mainPanel}
          style={{ overflowX: "hidden" }}
        >
          <div className={classes.content}>
            <div className={classes.container}>
              {" "}
              <Dashboard />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
