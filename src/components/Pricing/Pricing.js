/*eslint-disable*/
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// sections for this page
import SectionPricing from "components/Pricing/Sections/SectionPricing.js";
import SectionFeatures from "components/Pricing/Sections/SectionFeatures.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
const useStyles = makeStyles(pricingStyle);

const Pricing = () => {
  // lifecycle
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  //
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <SectionPricing />
        <hr />
        <SectionFeatures />
      </div>
    </div>
  );
};

export default Pricing;
