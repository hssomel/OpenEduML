import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/proTheme/Grid/GridContainer.js";
import GridItem from "components/proTheme/Grid/GridItem.js";
import NavPills from "components/proTheme/NavPills/NavPills.js";
import PricingCard from "./PriceCard";
import { makeStyles } from "@material-ui/core/styles";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing(props) {
  const classes = useStyles();
  const [time, setTime] = useState("MO.");
  const handleClick = () => {
    let x = time === "MO." ? "YR." : "MO.";
    setTime(x);
  };
  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem md={6} sm={6} className={classNames(classes.mrAuto, classes.mlAuto, classes.textCenter)}>
          <NavPills
            alignCenter
            onClick={handleClick}
            color="primary"
            tabs={[
              {
                tabButton: "monthly",
              },
              {
                tabButton: "yearly",
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      {/*  */}
      <GridContainer>
        <PricingCard
          plain={true}
          tier="Free"
          price="0"
          priceyr="0"
          hours="30"
          hourlyrate="$0"
          totalram="4 GB"
          totalcpus="2"
          multiplekernels="NO"
          gpukernels="NO"
          buttoncolor="primary"
          time={time}
          buttonClick={props.buttonClick}
        />
        <PricingCard
          raised={true}
          color="primary"
          tier="Plus"
          price="10"
          priceyr="99"
          hours="40"
          hourlyrate="$0.15"
          totalram="16 GB"
          totalcpus="4"
          multiplekernels="YES"
          gpukernels="NO"
          buttoncolor="white"
          titlecolor="white"
          time={time}
          buttonClick={props.buttonClick}
        />

        <PricingCard
          plain={true}
          tier="Pro"
          price="25"
          priceyr="249"
          hours="40"
          hourlyrate="$0.55"
          totalram="16 GB"
          totalcpus="4"
          multiplekernels="YES"
          gpukernels="YES"
          buttoncolor="primary"
          time={time}
          buttonClick={props.buttonClick}
        />
      </GridContainer>
    </div>
  );
}
