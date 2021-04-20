import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ComputerIcon from "@material-ui/icons/Computer";
import CloudIcon from "@material-ui/icons/Cloud";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Resources = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="info" stats icon>
        <CardIcon color="info">
          <ComputerIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Minimum Notebook CPU</p>
        <h4 className={classes.cardTitle}>4 vCPUs / 8GB RAM</h4>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <CloudIcon />
          Intel Skylake P-8175
        </div>
      </CardFooter>
    </Card>
  );
};

export default Resources;
