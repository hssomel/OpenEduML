import React from "react";
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

export default function SectionPricing() {
  const classes = useStyles();

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          md={6}
          sm={6}
          className={classNames(classes.mrAuto, classes.mlAuto, classes.textCenter)}
        >
          <NavPills
            alignCenter
            color="rose"
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
          hours="15"
          hourlyrate="$0"
          totalram="2 GB"
          totalcpus="2"
          multiplekernels="NO"
          gpukernels="NO"
          buttoncolor="rose"
        />
        <PricingCard
          raised={true}
          color="rose"
          tier="Plus"
          price="10"
          hours="30"
          hourlyrate="$0.88"
          totalram="4 GB"
          totalcpus="4"
          multiplekernels="YES"
          gpukernels="NO"
          buttoncolor="white"
          titlecolor="white"
        />

        <PricingCard
          plain={true}
          tier="Pro"
          price="30"
          hours="40"
          hourlyrate="$2.02"
          totalram="8 GB"
          totalcpus="8"
          multiplekernels="YES"
          gpukernels="YES"
          buttoncolor="rose"
        />
      </GridContainer>
    </div>
  );
}
