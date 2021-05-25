import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
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

const TimeRemaining = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  // STATE --------------------------------------------------->
  const [anchorElem, setAnchorElem] = useState(null);
  // EVENT HANDLERS ------------------------------------------>
  const handlePopperClose = () => setAnchorElem(null);
  const handleClick = (event) => setAnchorElem(event.currentTarget);
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
        <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick} />
        <Popover
          id={"simple-popover2"}
          open={anchorElem ? true : false}
          anchorEl={anchorElem}
          onClose={handlePopperClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes2.typography}>
            See the time remaining for this monthly period for accessing your Jupyter Notebook. Please note if
            you are a Plus or Pro tier member we will give you a popup and email notification to let you know
            that you have utilized your entire monthly balance and will now be billed by the hour. Maximum of
            up to an additional 100 hours. If you are a free tier member you will have to wait until the next
            billing period! Please check the payments page to see the standard hours given to each tier!
          </Typography>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default TimeRemaining;
