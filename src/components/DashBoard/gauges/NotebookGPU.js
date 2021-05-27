import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CloudIcon from "@material-ui/icons/Cloud";
import GrainIcon from "@material-ui/icons/Grain";
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

const NotebookGPU = () => {
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
      <CardHeader color="success" stats icon>
        <CardIcon color="success">
          <GrainIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Minimum Notebook GPU</p>
        <h5 style={{ color: "black" }}>Not Available</h5>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <CloudIcon />
          Nvidia V100
        </div>
        <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick} />
        <Popover
          id={"simple-popover4"}
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
            Access to GPU resources for running workloads (i.e. TensorFlow w/GPU) is only available on our Pro
            tier! Please visit our payments page to upgrade your subscription!
          </Typography>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default NotebookGPU;
