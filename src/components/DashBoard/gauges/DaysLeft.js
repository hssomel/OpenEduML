import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import DateRange from "@material-ui/icons/DateRange";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import TimelapseIcon from "@material-ui/icons/Timelapse";
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

const DaysLeft = ({ userUsage }) => {
  const classes = useStyles();
  const classes2 = useStyles2();

  const convertDate = () => {
    const { createdAt } = userUsage;
    let epochSeconds = createdAt.seconds.toString() + "000";
    let utcseconds = Number(epochSeconds);
    let date = new Date(utcseconds);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let yearA = year.toString().slice(-2);
    return month.toString() + "/" + day.toString() + "/" + yearA;
  };

  const returnDays = () => {
    const { createdAt, freeTrialLeft } = userUsage;
    let epochSeconds = createdAt.seconds.toString() + "000";
    let utcseconds = Number(epochSeconds);
    let date = new Date(utcseconds);
    let today = new Date();
    let hrs = (today - date) / (1000 * 60 * 60);
    return freeTrialLeft - Math.floor(Math.floor(hrs) / 24);
  };
  // ---------------------------------------------------------
  return (
    <Card>
      <CardHeader color="primary" stats icon>
        <CardIcon color="primary3">
          <TimelapseIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Days Remaining in Trial</p>
        <h5 style={{ color: "black", fontFamily: "Roboto" }}>
          {userUsage ? returnDays() : "Searching..."}
        </h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          Trial Date Started: {userUsage ? convertDate() : "Searching..."}
        </div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={classes2.typography}>
                See the days remaining in your free trial! Every user account is given a 31 day free
                trial where you have 30 hours of free usage of your online Jupyter Notebook! Please
                visit our payments page for more details on the different subscription tiers we
                offer!
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

export default connect(mapStateToProps)(DaysLeft);
