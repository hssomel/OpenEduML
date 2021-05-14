import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "components/DashBoard/dashcomponents/Card/Card.js";
import CardHeader from "components/DashBoard/dashcomponents/Card/CardHeader.js";
import CardBody from "components/DashBoard/dashcomponents/Card/CardBody.js";
import CardIcon from "components/DashBoard/dashcomponents/Card/CardIcon.js";
import CardFooter from "components/DashBoard/dashcomponents/Card/CardFooter.js";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import Button from "components/proTheme/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
// core components
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

const UpdateProfile = () => {
  const classes = useStyles();
  // #f6a4eb
  return (
    <Grid container spacing={4} style={{ marginTop: 10 }}>
      <Grid item xs={12} lg={9} style={{ paddingTop: 0 }}>
        <Card>
          <CardHeader color="primary" stats icon style={{ display: "flex" }}>
            <CardIcon color="pink">
              <PersonOutlineIcon />
            </CardIcon>
            <h4 style={{ color: "#606060", paddingTop: 12 }}>
              Edit Profile - <span style={{ fontSize: 15 }}>Address solely used for billing</span>
            </h4>
          </CardHeader>
          <CardBody style={{ paddingTop: 30 }}>
            <form className={classes.root} noValidate autoComplete="off">
              <Grid container>
                <Grid item xs={12} lg={5} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="uni" label="College/University" fullWidth />
                </Grid>
                <Grid item xs={12} lg={3} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="username" label="Username" fullWidth />
                </Grid>
                <Grid item xs={12} lg={4} style={{ padding: "0 18px 34px 18px" }}>
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
                <Grid item xs={12} lg={4} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="city" label="City" fullWidth />
                </Grid>
                <Grid item xs={12} lg={4} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField id="country" label="Country" fullWidth />
                </Grid>
                <Grid item xs={12} lg={4} style={{ padding: "0 18px 34px 18px" }}>
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
      {/*  */}
      <Grid item xs={12} lg={3} style={{ paddingTop: 0 }}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <AccessTime />
            </CardIcon>
            <p className={classes.cardCategory}>Time Remaining</p>
            <h5 style={{ color: "black" }}>00:30:00</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Date Last Accessed: 5/04/21
            </div>
          </CardFooter>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UpdateProfile;
