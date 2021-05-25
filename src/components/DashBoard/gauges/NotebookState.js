import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Danger from "../dashcomponents/Typography/Danger.js";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import Warning from "@material-ui/icons/Warning";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
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
const NotebookState = () => {
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
      <CardHeader color="primary5" stats icon>
        <CardIcon color="primary5">
          <BatteryAlertIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Jupyter Notebook State</p>
        <h5 style={{ color: "black" }}>Off</h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <Danger>
            <Warning />
          </Danger>
          <a href="#pablo">Ready to Launch</a>
        </div>

        <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick} />
        <Popover
          id={"simple-popover"}
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
            See the status of your current Jupyter Notebook server! If it is powered off and you are a free
            tier user who has used all of the free hours, then you will have to wait until the next monthly
            period. Please note all idle Jupyter Notebook Servers are powered off automatically after 30
            minutes. Make sure to save your work before logging off!
          </Typography>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default NotebookState;
