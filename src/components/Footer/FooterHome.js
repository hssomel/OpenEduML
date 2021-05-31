/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function FooterHome() {
  const classes = useStyles();
  return (
    <div
      style={{
        minHeight: "55px",
        backgroundColor: "#20232a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/contact" className={classes.left2}>
        ABOUT US
      </Link>
      <p className={classes.right2}>
        <span>
          &copy; {1900 + new Date().getYear()}{" "}
          <a href="/contact" target="_blank" className={classes.a}>
            OPENEDUML
          </a>
        </span>
      </p>
    </div>
  );
}
