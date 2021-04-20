import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
// core components
import Card from "./dashcomponents/Card/Card.js";
import CardHeader from "./dashcomponents/Card/CardHeader.js";
import CardBody from "./dashcomponents/Card/CardBody.js";
import CardFooter from "./dashcomponents/Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const ClusterAccessFree = () => {
  const classes = useStyles();
  return (
    <Card chart>
      <CardHeader
        color="info"
        style={{ height: 45, display: "flex", alignItems: "center" }}
      >
        <h4 className={classes.cardTitleWhite}>
          Access your Free OpenEduML Jupyter Notebook
        </h4>
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Notebook Ready to Launch</h4>
        <p
          className={classes.cardCategory}
          style={{ marginBottom: 20, marginTop: 10 }}
        >
          With your free tier membership of OpenEduML you get 30 minutes access
          every 24 hours to your Jupyter Notebook hosted on OpenEduML's cluster.
          Where you can build, train, and test Machine-learning models in
          parallel
        </p>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<PowerSettingsNewIcon />}
          style={{ marginBottom: 10 }}
        >
          Launch
        </Button>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime /> last launched: 4 minutes ago
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClusterAccessFree;
