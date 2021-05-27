import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import ComputerIcon from "@material-ui/icons/Computer";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CloudIcon from "@material-ui/icons/Cloud";
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

const NotebookCPU = () => {
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
      <CardHeader color="info" stats icon>
        <CardIcon color="primary1">
          <ComputerIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Minimum Notebook CPU</p>
        <h5 style={{ color: "black" }}>2 vCPUs / 4GB RAM</h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <CloudIcon />
          Intel Skylake P-8175
        </div>
        <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick} />
        <Popover
          id={"simple-popover3"}
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
            See the minimum guaranteed resources for your Jupyter Notebook! Please note that if you are on the
            free tier you may only run a single workload at a time! To increase your Jupyter Notebook
            resources please visit your payments page where you can upgrade to the Plus or Pro tiers! Allowing
            you to run multiple workloads and have access to GPU resources.
          </Typography>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default NotebookCPU;
