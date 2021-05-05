import React, { useState, useEffect, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminNavbar from "components/Navbars/admin.navbar.js";
import Dashboard from "../components/DashBoard/Dashboard.js";
import MiniSideBar from "components/Sidebar/MiniSideBar";
import routes from "../routes/routes.js";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";

const useStyles = makeStyles(styles);

const AdminPage = () => {
  const classes = useStyles();
  const mainPanel = createRef();
  // const [image] = useState(bgImage);
  // const [color] = useState("blue");
  // const [mobileOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [dashPadding, setDashPadding] = useState(100);
  const [navbarColor, setNavbarColor] = useState("transparent");
  //  event handlers
  const openSideBar = () => {
    setSideOpen(!sideOpen);
    let pad = dashPadding === 100 ? 240 : 100;
    setDashPadding(pad);
  };

  const updateNavColor = () => {
    const inner = document.getElementById("myDiv");
    if (inner.scrollTop > 5) setNavbarColor("info");
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
      <div className={classes.wrapper} style={{ backgroundColor: "#eeeeee" }}>
        <AdminNavbar routes={routes} color={navbarColor} toggleOpen={openSideBar} />
        <MiniSideBar sideOpen={sideOpen} />
        <div
          className={classes.mainPanel}
          id="myDiv"
          ref={mainPanel}
          style={{ overflowX: "hidden", paddingLeft: dashPadding }}
        >
          <div className={classes.content}>
            <div className={classes.container} style={{ marginTop: 36 }}>
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
