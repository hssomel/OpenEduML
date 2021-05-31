import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AccessTime from "@material-ui/icons/AccessTime";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const HtmlTooltip = withStyles(() => ({
  tooltip: {
    maxWidth: 450,
    opacity: 1,
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const ClusterAccessFree = () => {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <Card style={{ minHeight: 350 }}>
      <CardHeader color="rose">
        <h4 style={{ margin: 0, fontWeight: 700 }}>Access your FreeJupyter Notebook</h4>
      </CardHeader>
      <CardBody>
        <h4 style={{ marginTop: 10 }}>Notebook Ready to Launch </h4>
        <p
          className={classes.cardCategory}
          style={{
            marginBottom: 25,
            marginTop: 10,
            color: "#303030",
            fontSize: 15,
          }}
        >
          With your free tier membership of OpenEduML you get 30 hours per month total to access
          your free online Jupyter Notebook! Click on the button below to be redirected to your
          notebook! Putting together a page has never been easier than matching together sections.
          From team presentation to pricing options, you can easily customise and built your pages.
          If
        </p>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<PowerSettingsNewIcon />}
          style={{
            marginTop: 8,
            minWidth: 140,
            fontWeight: 700,
          }}
        >
          Launch
        </Button>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime /> last launched: 4 minutes ago
        </div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={classes2.typography}>
                The launch button will redirect your browser to OpenEduML's Jupyterhub which will
                grant you access to your own personal Jupyter Notebook. Please be sure to save your
                login credentials the first time you access your Jupyter Notebook
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <HelpOutlineIcon style={{ color: "#999", height: 18 }} />
        </HtmlTooltip>
      </CardFooter>
    </Card>
  );
};

export default ClusterAccessFree;
