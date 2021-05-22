import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Error";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// sections for this page
import SectionPricing from "components/Pricing/Sections/SectionPricing.js";
import SectionFeatures from "components/Pricing/Sections/SectionFeatures.js";
import InfoArea from "components/proTheme/InfoArea/InfoArea.js";
import StripeAddCard from "components/Pricing/Sections/StripeAddCard";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";
const useStyles = makeStyles(pricingStyle);
const useStyles2 = makeStyles(featuresStyle);

const Pricing = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const endRef = useRef(null);
  const [active, setActive] = useState(true);

  const buttonClick = (value) => setActive(value);
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // -------
  return (
    <div className={classes.container2} style={{ backgroundColor: "" }}>
      <SectionPricing buttonClick={scrollToBottom} />
      <hr />
      <SectionFeatures />
      <hr />
      {/* ---------------------- PAYMENT PROCESSING SECTION ---------------------- */}
      <div style={{ display: "flex", padding: "10px 0px", backgroundColor: "" }} ref={endRef}>
        <Grid container style={{ padding: "20px 0px 100px 0px", backgroundColor: "" }}>
          <Grid
            item
            xs={2}
            style={{
              padding: "20px 0px 100px 0px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "",
            }}
          >
            <Button
              variant={active ? "contained" : "outlined"}
              onClick={() => buttonClick(true)}
              style={{
                backgroundColor: `${active ? "#1d8cf8" : "transparent"}`,
                minHeight: 45,
                margin: "10px 12px 5px 12px",
                borderColor: `${active ? "#1d8cf8" : "transparent"}`,
                color: `${active ? "white" : "black"}`,
              }}
            >
              Payment Methods
            </Button>
            <hr style={{ width: "100%" }} />
            <Button
              variant={active ? "outlined" : "contained"}
              onClick={() => buttonClick(false)}
              style={{
                backgroundColor: `${active ? "transparent" : "#1d8cf8"}`,
                minHeight: 45,
                margin: "5px 12px 10px 12px",
                borderColor: `${active ? "transparent" : "#1d8cf8"}`,
                color: `${active ? "black" : "white"}`,
              }}
            >
              Subscriptions
            </Button>
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              backgroundColor: "",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 className={classes2.title} style={{ paddingTop: 0, marginTop: -10, marginBottom: 35 }}>
              {active ? "Payment Methods" : "Subscriptions"}
            </h3>
            <Button
              variant={"outlined"}
              // onClick={() => buttonClick(false)}
              style={{
                backgroundColor: "transparent",
                minHeight: 80,
                width: "60%",
                margin: "5px 0px 0px 0px",
                borderColor: "#DCDCDC",
                borderWidth: 3,
                color: "black",
              }}
            >
              <AddCircleOutlineIcon style={{ color: "#1d8cf8" }} />
              Add a Payment Method
            </Button>
            <hr style={{ width: "80%" }} />
            <InfoArea
              title="No payment methods found"
              description="Please add a payment method to change your subscription plan"
              icon={ErrorIcon}
              iconColor="danger"
            />
            {/* <StripeAddCard /> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Pricing;
