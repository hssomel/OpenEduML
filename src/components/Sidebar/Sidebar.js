/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

const Sidebar = (props) => {
  const classes = useStyles();
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  //
  const { color, logo, image, routes } = props;
  //
  var linksFromTop = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        //
        var activePro = " ";
        var listItemClasses;
        //
        if (prop.path === "/admin/upgrade") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true,
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: false,
          });
        }

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path),
        });
        return (
          <NavLink to={prop.path} className={activePro + classes.item} key={key}>
            <ListItem button className={classes.itemLink + listItemClasses}>
              <prop.icon className={classNames(classes.itemIcon, whiteFontClasses)} />
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  return (
    <div>
      <Hidden mdDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.logo}>
            <a href="/" className={classes.logoLink}>
              <div className={classes.logoImage}>
                <img src={logo} alt="logo" className={classes.img} />
              </div>
              OPENEDUML
            </a>
          </div>
          <div className={classes.sidebarWrapper}>{linksFromTop}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Sidebar;
