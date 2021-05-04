import React, { useState } from "react";
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
  const mainPanel = React.createRef();
  //
  const [image] = useState(bgImage);
  const [color] = useState("blue");
  const [mobileOpen] = useState(false);

  return (
    <>
      <div className={classes.wrapper} style={{ backgroundColor: "#eeeeee" }}>
        <Sidebar
          routes={routes}
          logo={logo}
          image={image}
          open={mobileOpen}
          color={color}
        />
        <AdminNavbar routes={routes} color="info" />
        <div className={classes.mainPanel} ref={mainPanel}>
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
