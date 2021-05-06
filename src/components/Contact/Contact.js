import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
// core components
import GridContainer from "components/proTheme/Grid/GridContainer.js";
import GridItem from "components/proTheme/Grid/GridItem.js";
import InfoArea from "components/proTheme/InfoArea/InfoArea.js";
import CustomInput from "components/proTheme/CustomInput/CustomInput.js";
import Button from "components/proTheme/CustomButtons/Button.js";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

const Contact = () => {
  const classes = useStyles();
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
            <form>
              <CustomInput
                labelText="Your Name"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Email address"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Phone"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Your message"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 6,
                }}
              />
              <div className={classes.textCenter}>
                <Button style={{ backgroundColor: "#1d8cf8" }} round>
                  Contact us
                </Button>
              </div>
            </form>
          </GridItem>
          <GridItem md={4} sm={4} className={classes.mlAuto}>
            <InfoArea
              className={classes.info}
              title="Send us an email"
              description={
                <p>
                  Email is the best way to reach us <br /> Fill out the form to send your
                  request <br /> info@openeduml.io
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
