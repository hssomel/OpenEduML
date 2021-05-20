import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridItem from "components/proTheme/Grid/GridItem.js";
import Card from "components/proTheme/Card/Card.js";
import CardBody from "components/proTheme/Card/CardBody.js";
import Button from "components/proTheme/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

const PricingCard = (props) => {
  const classes = useStyles();
  const { price, time, priceyr } = props;
  return (
    <GridItem xs={12} lg={4}>
      <Card plain={props.plain} pricing raised={props.raised} color={props.color}>
        <CardBody pricing>
          {/*  */}
          {!props.titlecolor && (
            <h6 className={classNames(classes.cardCategory, classes.textInfo)}>{props.tier}</h6>
          )}
          {props.titlecolor && <h6 className={classes.cardCategory}>{props.tier}</h6>}

          <h1 className={classes.cardTitle} style={{ color: props.titlecolor }}>
            <small>$</small>
            {time === "MO." ? price : priceyr} <small>/{time}</small>
          </h1>
          <ul style={{ maxWidth: 300 }}>
            <li>
              Hours included Per Month: <b>{props.hours}</b>
            </li>
            <li>
              Hourly rate after included hours depleted: <b>{props.hourlyrate}</b>
            </li>
            <li>
              Total Notebook Alloted RAM: <b>{props.totalram}</b>
            </li>
            <li>
              Total Notebook vCPUs: <b>{props.totalcpus}</b>
            </li>
            <li>
              Ability to Launch Multiple Kernels: <b>{props.multiplekernels}</b>
            </li>
            <li>
              Ability to Launch GPU Kernels: <b>{props.gpukernels}</b>
            </li>
          </ul>
          <Button onClick={props.buttonClick} color={props.buttoncolor} round>
            Get started
          </Button>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default PricingCard;
