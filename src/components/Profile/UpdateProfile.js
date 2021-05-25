import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "./ProfileCard";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { countries, occupations, api } from "./general.js";
import Card from "components/DashBoard/dashcomponents/Card/Card.js";
import CardHeader from "components/DashBoard/dashcomponents/Card/CardHeader.js";
import CardBody from "components/DashBoard/dashcomponents/Card/CardBody.js";
import CardIcon from "components/DashBoard/dashcomponents/Card/CardIcon.js";
import CardFooter from "components/DashBoard/dashcomponents/Card/CardFooter.js";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Button from "components/proTheme/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
const useStyles = makeStyles(styles);
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

const inputPropsText = {
  type: "text",
  maxLength: 25,
};

const UpdateProfile = ({ currentUser }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    country: "",
    occupation: "",
    firstname: "",
    lastname: "",
    college: "",
    postal: "",
  });
  // EVENT HANDLERS ------------------------------------------------------------->
  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const payload = {
        id: currentUser.id,
      };
      let empty = true;
      for (let keys in formDetails) {
        if (formDetails[keys]) {
          empty = false;
          payload[keys] = formDetails[keys];
        }
      }
      if (empty) {
        alert("please fill out field");
        setLoading(false);
        return;
      }
      const res = await api.post("/updateprofile", payload);
      console.log(res);
      alert(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onInputChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^A-Za-z]/gi, "");
    setFormDetails({ ...formDetails, [event.target.id]: value });
  };

  const onCollegeChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^A-Za-z\s]/gi, "");
    setFormDetails({ ...formDetails, [event.target.id]: value });
  };

  const onPostalChange = (event) => {
    let value = event.target.value;
    if (value.toString().length < 6) setFormDetails({ ...formDetails, [event.target.id]: value });
  };

  const onCountryChange = (event) => {
    setFormDetails({ ...formDetails, country: event.target.value });
  };

  const onJobChange = (event) => {
    setFormDetails({ ...formDetails, occupation: event.target.value });
  };
  // ---------------------------------------------------------------------------->
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
            <form className={classes.root} autoComplete="off" onSubmit={handleFormSubmit}>
              <Grid container>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField
                    id="country"
                    label="Country"
                    fullWidth
                    select
                    value={formDetails.country}
                    onChange={(e) => onCountryChange(e)}
                  >
                    {countries.map((el) => {
                      return (
                        <MenuItem key={el} value={el}>
                          {el}
                        </MenuItem>
                      );
                    })}
                  </CssTextField>
                </Grid>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField
                    id="occupation"
                    label="Occupation"
                    fullWidth
                    select
                    value={formDetails.occupation}
                    onChange={(e) => onJobChange(e)}
                  >
                    {occupations.map((el) => {
                      return (
                        <MenuItem key={el} value={el}>
                          {el}
                        </MenuItem>
                      );
                    })}
                  </CssTextField>
                </Grid>
              </Grid>
              {/*  */}
              <Grid container>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField
                    id="firstname"
                    label="First Name"
                    fullWidth
                    inputProps={inputPropsText}
                    value={formDetails.firstname}
                    onChange={(e) => onInputChange(e)}
                  />
                </Grid>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField
                    id="lastname"
                    label="Last Name"
                    fullWidth
                    inputProps={inputPropsText}
                    value={formDetails.lastname}
                    onChange={(e) => onInputChange(e)}
                  />
                </Grid>
              </Grid>
              {/*  */}
              <Grid container>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField
                    id="college"
                    label="College/University"
                    fullWidth
                    inputProps={inputPropsText}
                    value={formDetails.college}
                    onChange={(e) => onCollegeChange(e)}
                  />
                </Grid>
                <Grid item xs={12} lg={6} style={{ padding: "0 18px 34px 18px" }}>
                  <CssTextField
                    id="postal"
                    label="Postal Code"
                    fullWidth
                    type="number"
                    value={formDetails.postal}
                    onChange={(e) => onPostalChange(e)}
                  />
                </Grid>
              </Grid>

              {!loading && (
                <CardFooter
                  stats
                  style={{ display: "flex", justifyContent: "flex-end", paddingRight: 30, paddingTop: 16 }}
                >
                  <Button
                    style={{ backgroundColor: "#f6a4eb", minHeight: 45, minWidth: 180, fontSize: 14 }}
                    type="submit"
                  >
                    Update Profile
                  </Button>
                </CardFooter>
              )}
              {loading && <CircularProgress style={{ color: "#1d8cf8" }} />}
            </form>
          </CardBody>
        </Card>
      </Grid>
      {/* ----------------------- My Profile Card ----------------------------------------------- */}
      <Grid item xs={12} lg={4} style={{ paddingTop: 0 }}>
        <ProfileCard />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UpdateProfile);
