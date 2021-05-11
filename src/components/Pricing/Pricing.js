import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// sections for this page
import SectionPricing from "components/Pricing/Sections/SectionPricing.js";
import SectionFeatures from "components/Pricing/Sections/SectionFeatures.js";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
const useStyles = makeStyles(pricingStyle);

const Pricing = () => {
  const classes = useStyles();
  //
  return (
    <div className={classes.container2}>
      <SectionPricing />
      <hr />
      <SectionFeatures />
      <hr />
      <SectionFeatures />
    </div>
  );
};

export default Pricing;
