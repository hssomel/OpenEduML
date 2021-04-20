import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CloudIcon from "@material-ui/icons/Cloud";
import GrainIcon from "@material-ui/icons/Grain";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const GpuResources = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="success" stats icon>
        <CardIcon color="success">
          <GrainIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Minimum Notebook GPU</p>
        <h4 className={classes.cardTitle}>8 vGPUs / 32GB RAM</h4>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <CloudIcon />
          Nvidia V100
        </div>
      </CardFooter>
    </Card>
  );
};

export default GpuResources;
