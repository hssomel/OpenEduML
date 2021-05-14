import React, { useState, useEffect, createRef } from "react";
import AdminNavbar from "components/Navbars/admin.navbar.js";
import MiniSideBar from "components/Sidebar/MiniSideBar";
import { makeStyles } from "@material-ui/core/styles";
import UpdateProfile from "components/Profile/UpdateProfile";

// core components
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import routes from "../routes/routes.js";

const useStyles = makeStyles(styles);

const ProfilePage = () => {
  const classes = useStyles();
  const mainPanel = createRef();
  const [sideOpen, setSideOpen] = useState(false);
  const [dashPadding, setDashPadding] = useState(110);
  const [navbarColor, setNavbarColor] = useState("transparent");
  //
  //  event handlers
  const openSideBar = () => {
    setSideOpen(!sideOpen);
    let pad = dashPadding === 110 ? 220 : 110;
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
  // #f6a4eb
  return (
    <>
      <div className={classes.wrapper} style={{ backgroundColor: "#eeeeee" }}>
        <AdminNavbar routes={routes} color={navbarColor} toggleOpen={openSideBar} sideOpen={sideOpen} />
        <MiniSideBar sideOpen={sideOpen} />
        <div
          className={classes.mainPanel}
          id="myDiv"
          ref={mainPanel}
          style={{ overflowX: "hidden", paddingLeft: dashPadding, paddingTop: 10 }}
        >
          <div className={classes.content}>
            <div className={classes.container} style={{ marginTop: 36 }}>
              <UpdateProfile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
