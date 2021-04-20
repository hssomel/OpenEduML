import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
// core components
import Danger from "./dashcomponents/Typography/Danger.js";
import Card from "./dashcomponents/Card/Card.js";
import CardHeader from "./dashcomponents/Card/CardHeader.js";
import CardIcon from "./dashcomponents/Card/CardIcon.js";
import CardFooter from "./dashcomponents/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const NotebookState = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon color="warning">
          <BatteryAlertIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Notebook/Cluster State</p>
        <h4 className={classes.cardTitle}>Off</h4>
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
  );
};

export default NotebookState;
