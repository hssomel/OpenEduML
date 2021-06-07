import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

const TimeRemaining = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  // ---------------------------------------------------------
  return (
    <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon color="warning">
          <AccessTime />
        </CardIcon>
        <p className={classes.cardCategory}>Time Remaining (hrs:mins)</p>
        <h5 style={{ color: "black" }}>30:00</h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          Date Last Accessed: 5/04/21
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

export default TimeRemaining;
