/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/"
                className={classes.block}
                style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 12 }}
              >
                HOME
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="/contact"
              target="_blank"
              className={classes.a}
              style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 13 }}
            >
              OPENEDUML
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
