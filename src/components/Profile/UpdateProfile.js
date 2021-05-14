import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "components/DashBoard/dashcomponents/Card/Card.js";
import CardHeader from "components/DashBoard/dashcomponents/Card/CardHeader.js";
import CardBody from "components/DashBoard/dashcomponents/Card/CardBody.js";
import CardIcon from "components/DashBoard/dashcomponents/Card/CardIcon.js";
import CardFooter from "components/DashBoard/dashcomponents/Card/CardFooter.js";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Button from "components/proTheme/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1d8cf8",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1d8cf8",
    },
  },
})(TextField);

const useStyles = makeStyles(styles);

const UpdateProfile = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} style={{ marginTop: 10 }}>
      <Grid item xs={12} lg={8} style={{ paddingTop: 0 }}>
        <Card>
          <CardHeader color="primary" stats icon style={{ display: "flex" }}>
            <CardIcon color="pink">
              <PersonOutlineIcon />
            </CardIcon>
            <h4 style={{ color: "#606060", paddingTop: 12 }}>
              Edit Profile - <span style={{ fontSize: 15 }}>Postal code solely used for billing</span>
            </h4>
          </CardHeader>
          <CardBody style={{ paddingTop: 30 }}>
            <form className={classes.root} noValidate autoComplete="off">
              <Grid container>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="username" label="Username" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="emailaddress" label="Email Address" fullWidth />
                </Grid>
              </Grid>
              {/*  */}
              <Grid container>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="firstname" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="lastname" label="Last Name" fullWidth />
                </Grid>
              </Grid>
              {/*  */}
              <Grid container>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="college" label="College/University" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="postalcode" label="Postal Code" fullWidth />
                </Grid>
              </Grid>
            </form>
          </CardBody>
          <CardFooter
            stats
            style={{ display: "flex", justifyContent: "flex-end", paddingRight: 30, paddingTop: 16 }}
          >
            <Button style={{ backgroundColor: "#f6a4eb", minHeight: 45, minWidth: 180, fontSize: 14 }}>
              Update Profile
            </Button>
          </CardFooter>
        </Card>
      </Grid>
      {/* ----------------------- My Profile Card ----------------------------------------------- */}
      <Grid item xs={12} lg={4} style={{ paddingTop: 0 }}>
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
                <ListItemText primary="Username:" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Email:" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Filter1Icon />
                </ListItemIcon>
                <ListItemText primary="First Name:" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Filter2Icon />
                </ListItemIcon>
                <ListItemText primary="Last Name:" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="College: " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Postal Code:" />
              </ListItem>
            </List>
          </CardBody>
          <CardFooter stats>
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
      </Grid>
    </Grid>
  );
};

export default UpdateProfile;
