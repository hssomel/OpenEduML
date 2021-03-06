import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Poppers from "@material-ui/core/Popper";
import { auth } from "firebase/firebase.utils";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import { clearProfile } from "../../../redux/user/user.actions";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Button from "components/DashBoard/dashcomponents/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const ContactHeaderLinks = ({ clearProfile }) => {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = React.useState(null);

  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const handleSignOut = async () => {
    try {
      clearProfile();
      await auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Link to="/admin/dashboard" style={{ color: "white" }}>
          <Dashboard className={classes.icons} style={{ height: 22, width: 22 }} />
        </Link>
      </Button>

      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          {/* ----------- Person Icon --------------------------- */}
          <Person className={classes.icons} style={{ height: 26, width: 26 }} />
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ [classes.popperClose]: !openProfile }) + " " + classes.popperNav}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <Link to="/admin/profile" style={{ color: "white" }}>
                      <MenuItem onClick={handleCloseProfile} className={classes.dropdownItem}>
                        Profile
                      </MenuItem>
                    </Link>

                    <Divider light />
                    <Link to="/" style={{ color: "white" }}>
                      <MenuItem onClick={handleSignOut} className={classes.dropdownItem}>
                        Logout
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // currentUser: state.user.currentUser,
  // currentProfile: state.user.currentProfile,
});

export default connect(mapStateToProps, { clearProfile })(ContactHeaderLinks);
