import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../dashcomponents/Grid/GridItem.js";
import GridContainer from "../dashcomponents/Grid/GridContainer.js";
import Danger from "../dashcomponents/Typography/Danger.js";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import ComputerIcon from "@material-ui/icons/Computer";
import CloudIcon from "@material-ui/icons/Cloud";
import GrainIcon from "@material-ui/icons/Grain";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const StatusGauges = () => {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <BatteryAlertIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Notebook/Cluster State</p>
            <h5 style={{ color: "black" }}>Off</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Danger>
                <Warning />
              </Danger>
              <a href="#pablo">Ready to Launch</a>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      {/*  */}
      <GridItem xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="danger">
              <AccessTime />
            </CardIcon>
            <p className={classes.cardCategory}>Time Remaining</p>
            <h5 style={{ color: "black" }}>00:30:00</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Date Last Accessed: 5/04/21
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      {/*  */}
      <GridItem xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <ComputerIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Minimum Notebook CPU</p>
            <h5 style={{ color: "black" }}>4 vCPUs / 8GB RAM</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <CloudIcon />
              Intel Skylake P-8175
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      {/*  */}
      <GridItem xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <GrainIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Minimum Notebook GPU</p>
            <h5 style={{ color: "black" }}>8 vGPUs / 32GB RAM</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <CloudIcon />
              Nvidia V100
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default StatusGauges;
