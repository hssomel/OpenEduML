import React, { useState } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "components/DashBoard/dashcomponents/CustomButtons/Button.js";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

const AdminNavbar = (props) => {
  const classes = useStyles();

  const { color } = props;
  const [navbarColor] = useState(color);
  const appBarClasses = classNames({
    [" " + classes[color]]: navbarColor,
  });

  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div
            className={classes.flex}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 25,
            }}
          >
            <Button
              color="white"
              aria-label="open drawer"
              justIcon
              round
              onClick={props.toggleOpen}
            >
              {props.sideOpen ? (
                <ChevronLeftIcon style={{ backgroundColor: "white" }} />
              ) : (
                <ChevronRightIcon />
              )}
            </Button>

            <AdminNavbarLinks />
          </div>
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
