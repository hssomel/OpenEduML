import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ContactHeaderLinks from "./ContactHeaderLinks";
import styles from "assets/jss/material-kit-pro-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { color, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <Link to="/">{brand}</Link>
        </Button>
        <ContactHeaderLinks />
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};
