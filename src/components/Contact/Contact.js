import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import axios from "axios";
import GridContainer from "components/proTheme/Grid/GridContainer.js";
import GridItem from "components/proTheme/Grid/GridItem.js";
import InfoArea from "components/proTheme/InfoArea/InfoArea.js";
import Button from "components/proTheme/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

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
  maxLength: 30,
};

const inputPropsEmail = {
  type: "email",
  maxLength: 30,
};

const api = axios.create({
  baseURL: `http://192.168.4.22:5000/api/profile`,
  headers: {
    "Content-Type": "application/json",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // Event Handlers ------------------------------------------------------->
  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const payload = {
        formDetails,
      };
      const res = await api.post("/contact", payload);
      alert(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onNameChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^A-Za-z]/gi, "");
    setFormDetails({ ...formDetails, [event.target.id]: value });
  };

  const onPhoneChange = (event) => {
    let value = event.target.value;
    if (value.toString().length < 12) setFormDetails({ ...formDetails, [event.target.id]: value });
  };

  const onInputChange = (event) => {
    let value = event.target.value;
    if (value.length < 140) setFormDetails({ ...formDetails, [event.target.id]: value });
  };
  // ------------------------------------------------------------------------->
  return (
    <div className={classes.contactContent}>
      <div className={classes.container}>
        <h2 className={classes.title}>Send us a message</h2>
        <GridContainer>
          <GridItem md={6} sm={6}>
            <p>
              You can contact us with anything related to our Products. We
              {"'"}ll get in touch with you as soon as possible.
              <br />
              <br />
            </p>
            <form style={{ backgroundColor: "" }} autoComplete="off" onSubmit={handleFormSubmit}>
              <CssTextField
                id="name"
                label="Your Name"
                fullWidth
                required
                inputProps={inputPropsText}
                value={formDetails.name}
                style={{ marginBottom: 16 }}
                onChange={(e) => onNameChange(e)}
              />
              <CssTextField
                id="email"
                label="email address"
                fullWidth
                required
                type="email"
                inputProps={inputPropsEmail}
                value={formDetails.email}
                style={{ marginBottom: 16, marginTop: 16 }}
                onChange={(e) => onInputChange(e)}
              />
              <CssTextField
                id="phone"
                label="Phone"
                fullWidth
                type="number"
                required
                value={formDetails.phone}
                style={{ marginBottom: 16, marginTop: 16 }}
                onChange={(e) => onPhoneChange(e)}
              />
              <CssTextField
                id="message"
                label="message"
                fullWidth
                multiline
                required
                value={formDetails.message}
                style={{ marginBottom: 16, marginTop: 16 }}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  rows: 6,
                }}
              />

              <div className={classes.textCenter}>
                {!loading && (
                  <Button style={{ backgroundColor: "#1d8cf8" }} round type="submit">
                    Contact us
                  </Button>
                )}
                {loading && <CircularProgress style={{ color: "#1d8cf8" }} />}
              </div>
            </form>
          </GridItem>
          <GridItem md={4} sm={4} className={classes.mlAuto}>
            <InfoArea
              className={classes.info}
              title="Send us an email"
              description={
                <p>
                  Email is the best way to reach us <br /> Fill out the form to send your request <br />{" "}
                  info@openeduml.io
                </p>
              }
              icon={PinDrop}
              iconColor="secondary"
            />
            <InfoArea
              className={classes.info}
              title="Give us a ring"
              description={
                <p>
                  HARPREET SOMEL <br /> +1 714 553 5938 <br /> Mon - Fri, 8:00-22:00
                </p>
              }
              icon={Phone}
              iconColor="secondary"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default Contact;
