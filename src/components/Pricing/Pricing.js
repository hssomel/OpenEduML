import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
// sections for this page
import SectionPricing from "components/Pricing/Sections/SectionPricing.js";
import SectionFeatures from "components/Pricing/Sections/SectionFeatures.js";
import StripeAddCard from "components/Pricing/Sections/StripeAddCard";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
const useStyles = makeStyles(pricingStyle);

const Pricing = () => {
  const classes = useStyles();
  const endRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //
  return (
    <div className={classes.container2}>
      <SectionPricing buttonClick={scrollToBottom} />
      <hr />
      <SectionFeatures />
      <hr />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }} ref={endRef}>
        <StripeAddCard />
      </div>
    </div>
  );
};

export default Pricing;
