import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SectionPricing from "components/Pricing/Sections/SectionPricing.js";
import SectionFeatures from "components/Pricing/Sections/SectionFeatures.js";
import AddPayment from "components/Pricing/addlComponents/AddPayment";
import SwitchTier from "components/Pricing/addlComponents/SwitchTier";
import StripeModal from "components/Pricing/addlComponents/StripeModal";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";
const useStyles = makeStyles(pricingStyle);
const useStyles2 = makeStyles(featuresStyle);

const Pricing = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  //
  const endRef = useRef(null);
  const [active, setActive] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  // Event Handlers --------------------------------------->
  const buttonClick = (value) => setActive(value);
  const openModal = () => setModalOpen(!modalOpen);
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // -------------------------------------------------------
  return (
    <div className={classes.container2} style={{ backgroundColor: "" }}>
      <SectionPricing buttonClick={scrollToBottom} />
      <hr />
      <SectionFeatures />
      <hr />
      {/* ---------------------- PAYMENT PROCESSING SECTION ---------------------- */}
      <div style={{ display: "flex", padding: "10px 0px" }} ref={endRef}>
        <Grid container style={{ padding: "40px 0px 100px 0px" }}>
          <Grid item xs={2} className={classes.tabGrid}>
            <Button
              variant={active ? "contained" : "outlined"}
              onClick={() => buttonClick(true)}
              className={classes.tabButtons}
              style={{
                backgroundColor: `${active ? "#1d8cf8" : "transparent"}`,
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
              className={classes.tabButtons}
              style={{
                backgroundColor: `${active ? "transparent" : "#1d8cf8"}`,
                borderColor: `${active ? "transparent" : "#1d8cf8"}`,
                color: `${active ? "black" : "white"}`,
              }}
            >
              Subscriptions
            </Button>
          </Grid>
          <Grid item xs={8} className={classes.processingGrid}>
            <h3
              className={classes2.title}
              style={{ paddingTop: 0, marginTop: -10, marginBottom: `${active ? "65px" : "10px"}` }}
            >
              {active ? "Payment Methods" : "Subscriptions"}
            </h3>

            {active && <AddPayment onClick={openModal} />}
            {!active && <SwitchTier />}
            <StripeModal modalOpen={modalOpen} onClick={openModal} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Pricing;
