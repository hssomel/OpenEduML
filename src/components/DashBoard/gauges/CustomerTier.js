import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import DateRange from "@material-ui/icons/DateRange";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PaymentIcon from "@material-ui/icons/Payment";
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

const CustomerTier = ({ userUsage }) => {
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
  // ---------------------------------------------------------
  return (
    <Card>
      <CardHeader color="primary4" stats icon>
        <CardIcon color="primary4">
          <PaymentIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Your current subscription Tier</p>
        <h5 style={{ color: "black", fontFamily: "Roboto" }}>Free</h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          Last Modified: {userUsage ? convertDate() : "Searching..."}
        </div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={classes2.typography}>
                See your current subscription tier! OpenEduML offers "Plus" and "Pro" tiers in
                addition to the default free tier provided to each user. Please visit the payments
                page to change your subscription plan and if you have any questions please don't
                hesitate to email support!
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

export default connect(mapStateToProps)(CustomerTier);
