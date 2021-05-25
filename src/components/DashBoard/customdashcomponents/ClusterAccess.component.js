import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AccessTime from "@material-ui/icons/AccessTime";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const ClusterAccessFree = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [anchorElem, setAnchorElem] = useState(null);

  const handlePopperClose = () => setAnchorElem(null);
  const handlePopperOpen = (event) => setAnchorElem(event.currentTarget);

  return (
    <Card style={{ minHeight: 370 }}>
      <CardHeader color="rose">
        <h4 style={{ margin: 0, fontWeight: 700 }}>Access your FreeJupyter Notebook</h4>
      </CardHeader>
      <CardBody>
        <h4 style={{ marginTop: 10 }}>Notebook Ready to Launch </h4>
        <p
          className={classes.cardCategory}
          style={{
            marginBottom: 25,
            marginTop: 10,
            color: "#303030",
            fontSize: 15,
          }}
        >
          With your free tier membership of OpenEduML you get 30 minutes access every 24 hours to your Jupyter
          Notebook hosted on OpenEduML's cluster. Where you can build, train, and test Machine-learning models
          in parallel
        </p>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<PowerSettingsNewIcon />}
          style={{
            marginTop: 8,
            minWidth: 140,
            fontWeight: 700,
          }}
        >
          Launch
        </Button>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime /> last launched: 4 minutes ago
        </div>
        <HelpOutlineIcon style={{ color: "#999", height: 18 }} onClick={handlePopperOpen} />
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
          <Typography className={classes2.typography}>The content of the First Popover.</Typography>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default ClusterAccessFree;
