import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
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

const TimeRemaining = ({ userUsage }) => {
  const classes = useStyles();
  const classes2 = useStyles2();

  const convertMinsToTime = () => {
    const { timeLeft } = userUsage;
    let hours = Math.floor(timeLeft / 60);
    let minutes = timeLeft - hours * 60;
    if (minutes === 0) minutes = "00";
    return hours.toString() + ":" + minutes.toString();
  };

  const convertDate = () => {
    const { createdAt } = userUsage;
    let epochSeconds = createdAt.seconds.toString() + "000";
    let utcseconds = Number(epochSeconds);
    let date = new Date(utcseconds);
    let day = date.getDate();
    let month = date.getMonth() + 2;
    let year = date.getFullYear();
    let yearA = year.toString().slice(-2);
    return month.toString() + "/" + day.toString() + "/" + yearA;
  };
  // ---------------------------------------------------------
  return (
    <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon color="warning">
          <AccessTime />
        </CardIcon>
        <p className={classes.cardCategory}>Time Remaining (hrs:mins)</p>
        <h5 style={{ color: "black", fontFamily: "Roboto" }}>
          {userUsage ? convertMinsToTime() : "00"}
        </h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          Billing Cycle Ends: {userUsage ? convertDate() : "Searching..."}
        </div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={classes2.typography}>
                See the time remaining for this monthly period for accessing your Jupyter Notebook.
                Please note if you are a Plus or Pro tier member we will give you a popup and email
                notification to let you know that you have utilized your entire monthly balance and
                will now be billed by the hour. Maximum of up to an additional 100 hours. If you are
                a free tier member you will have to wait until the next billing period! Please check
                the payments page to see the standard hours given to each tier!
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

export default connect(mapStateToProps)(TimeRemaining);
