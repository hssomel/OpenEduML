import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Danger from "../dashcomponents/Typography/Danger.js";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardIcon from "../dashcomponents/Card/CardIcon.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import Grid from "@material-ui/core/Grid";
import Warning from "@material-ui/icons/Warning";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import ComputerIcon from "@material-ui/icons/Computer";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CloudIcon from "@material-ui/icons/Cloud";
import GrainIcon from "@material-ui/icons/Grain";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
// STYLES
const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
//

const StatusGauges = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  // STATE --------------------------------------------------->
  const [anchorElem1, setAnchorElem1] = useState(null);
  const [anchorElem2, setAnchorElem2] = useState(null);
  const [anchorElem3, setAnchorElem3] = useState(null);
  const [anchorElem4, setAnchorElem4] = useState(null);
  // EVENT HANDLERS ------------------------------------------>
  const handlePopperClose = (num) => {
    switch (Number(num)) {
      case 1:
        setAnchorElem1(null);
      case 2:
        setAnchorElem2(null);
      case 3:
        setAnchorElem3(null);
      case 4:
        setAnchorElem4(null);
    }
  };

  const handleClick1 = (event) => setAnchorElem1(event.currentTarget);
  const handleClick2 = (event) => setAnchorElem2(event.currentTarget);
  const handleClick3 = (event) => setAnchorElem3(event.currentTarget);
  const handleClick4 = (event) => setAnchorElem4(event.currentTarget);
  // ---------------------------------------------------------
  return (
    <Grid container spacing={4} style={{ marginBottom: 15 }}>
      <Grid item xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="primary5" stats icon>
            <CardIcon color="primary5">
              <BatteryAlertIcon onClick={handleClick1} />
            </CardIcon>
            <p className={classes.cardCategory}>Notebook/Cluster State</p>
            <h5 style={{ color: "black" }}>Off</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Danger>
                <Warning />
              </Danger>
              <a href="#pablo">Ready to Launch</a>
            </div>

            <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick1} />
            <Popover
              id={"simple-popover"}
              open={anchorElem1 ? true : false}
              anchorEl={anchorElem1}
              onClose={() => handlePopperClose("1")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes2.typography}>The content of the First Popover.</Typography>
            </Popover>
          </CardFooter>
        </Card>
      </Grid>
      {/*  */}
      <Grid item xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <AccessTime />
            </CardIcon>
            <p className={classes.cardCategory}>Time Remaining</p>
            <h5 style={{ color: "black" }}>00:30:00</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Date Last Accessed: 5/04/21
            </div>
            <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick2} />
            <Popover
              id={"simple-popover2"}
              open={anchorElem2 ? true : false}
              anchorEl={anchorElem2}
              onClose={() => handlePopperClose("2")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes2.typography}>The content of the Second Popover.</Typography>
            </Popover>
          </CardFooter>
        </Card>
      </Grid>
      {/*  */}
      <Grid item xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="primary1">
              <ComputerIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Minimum Notebook CPU</p>
            <h5 style={{ color: "black" }}>4 vCPUs / 8GB RAM</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <CloudIcon />
              Intel Skylake P-8175
            </div>
            <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick3} />
            <Popover
              id={"simple-popover3"}
              open={anchorElem3 ? true : false}
              anchorEl={anchorElem3}
              onClose={() => handlePopperClose("3")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes2.typography}>The content of the Third Popover.</Typography>
            </Popover>
          </CardFooter>
        </Card>
      </Grid>
      {/*  */}
      <Grid item xs={12} sm={6} lg={3}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <GrainIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Minimum Notebook GPU</p>
            <h5 style={{ color: "black" }}>8 vGPUs / 32GB RAM</h5>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <CloudIcon />
              Nvidia V100
            </div>
            <HelpOutlineIcon style={{ color: "#999" }} onClick={handleClick4} />
            <Popover
              id={"simple-popover4"}
              open={anchorElem4 ? true : false}
              anchorEl={anchorElem4}
              onClose={() => handlePopperClose("4")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes2.typography}>The content of the Fourth Popover.</Typography>
            </Popover>
          </CardFooter>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatusGauges;
