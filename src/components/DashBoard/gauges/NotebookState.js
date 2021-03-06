import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import { connect } from "react-redux";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// STYLES
const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    width: 450,
  },
}));
//
const HtmlTooltip = withStyles(() => ({
  tooltip: {
    maxWidth: 450,
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const NotebookState = ({ userUsage }) => {
  const classes = useStyles();
  const classes2 = useStyles2();
  // ---------------------------------------------------------
  return (
    <Card>
      <CardHeader color="primary5" stats icon>
        <CardIcon color="primary5">
          <BatteryAlertIcon />
        </CardIcon>

        <p className={classes.cardCategory}>Jupyter Notebook State</p>
        <h5 style={{ color: "black", fontFamily: "Roboto" }}>
          {userUsage !== null ? userUsage.notebookState : "Searching..."}
        </h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <LaunchIcon />
          Ready to Launch
        </div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={classes2.typography}>
                See the status of your current Jupyter Notebook server! If it is powered off and you
                are a free tier user who has used all of the free hours, then you will have to wait
                until the next monthly period. Please note all idle Jupyter Notebook Servers are
                powered off automatically after 30 minutes. Make sure to save your work before
                logging off!
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <HelpOutlineIcon style={{ color: "#999" }} />
        </HtmlTooltip>
      </CardFooter>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  userUsage: state.user.userUsage,
});

export default connect(mapStateToProps)(NotebookState);
