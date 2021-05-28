import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/DashBoard/dashcomponents/Card/Card.js";
import CardHeader from "components/DashBoard/dashcomponents/Card/CardHeader.js";
import CardBody from "components/DashBoard/dashcomponents/Card/CardBody.js";
import CardIcon from "components/DashBoard/dashcomponents/Card/CardIcon.js";
import CardFooter from "components/DashBoard/dashcomponents/Card/CardFooter.js";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

const UpdateProfile = ({ currentUser, currentProfile }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="warning" stats icon style={{ display: "flex" }}>
        <CardIcon color="warning">
          <ContactMailIcon />
        </CardIcon>
        <h4 style={{ color: "#606060", paddingTop: 12 }}>My Profile</h4>
      </CardHeader>
      <CardBody>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={`Username: ${currentUser.username}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary={`Email: ${currentUser.email}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Filter1Icon />
            </ListItemIcon>
            <ListItemText primary={`First Name: ${currentProfile.firstname}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Filter2Icon />
            </ListItemIcon>
            <ListItemText primary={`Last Name: ${currentProfile.lastname}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={`College: ${currentProfile.college}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={`Postal Code: ${currentProfile.postal}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary={`Country: ${currentProfile.country}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={`Occupation: ${currentProfile.occupation}`} />
          </ListItem>
        </List>
      </CardBody>
      <CardFooter stats style={{ marginTop: 0 }}>
        <div
          className={classes.stats}
          style={{
            display: "flex",
            verticalAlign: "center",
          }}
        >
          <PaymentIcon style={{ marginTop: 0 }} />
          <p style={{ fontSize: 14, alignSelf: "center", marginBottom: 0 }}>
            Edit payment methods and subscriptions on the payments page!
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentProfile: state.user.currentProfile,
});

export default connect(mapStateToProps)(UpdateProfile);
