import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const TimeRemaining = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon color="danger">
          <AccessTime />
        </CardIcon>
        <p className={classes.cardCategory}>Time Remaining</p>
        <h4 className={classes.cardTitle}>00:30:00</h4>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          Date Last Accessed: 5/04/21
        </div>
      </CardFooter>
    </Card>
  );
};

export default TimeRemaining;
