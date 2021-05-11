import React from "react";
import classNames from "classnames";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
import routes from "routes/routes.js";

const useStyles2 = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  drawer: {
    position: "fixed",
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflowY: "hidden",
    borderRadius: 6,
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowY: "hidden",
    overflowX: "hidden",
    width: 190,
    marginLeft: 20,
    background: "linear-gradient(#1d8cf8, #0772db)",
    marginTop: 70,
    height: "70%",
    borderRadius: 6,
    boxShadow: "3px 3px darkgray",
    zIndex: 100000,
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowY: "hidden",
    overflowX: "hidden",
    width: 80,
    marginLeft: 20,
    background: "linear-gradient(#1d8cf8, #0772db)",
    marginTop: 70,
    height: "70%",
    borderRadius: 6,
    zIndex: 100000,
    boxShadow: "3px 3px darkgray",
  },
}));

const MiniSideBar = (props) => {
  const classes = useStyles();
  const classes2 = useStyles2();

  var linksFromTop = (
    <List className={classes2.list}>
      {routes.map((prop, key) => {
        //
        var activePro = " ";

        const whiteFontClasses = classNames({
          [" " + classes2.whiteFont2]: false,
        });
        return (
          <NavLink to={prop.path} className={activePro + classes2.item2} key={key}>
            <ListItem button className={classes2.itemLink2}>
              <prop.icon className={classes2.itemIcon2} />
              {props.sideOpen && (
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes2.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              )}
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  return (
    <div styles={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.sideOpen,
          [classes.drawerClose]: !props.sideOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.sideOpen,
            [classes.drawerClose]: !props.sideOpen,
          }),
        }}
        open={props.sideOpen}
      >
        <div className={classes2.sidebarWrapper}>{linksFromTop}</div>
      </Drawer>
    </div>
  );
};

export default MiniSideBar;
