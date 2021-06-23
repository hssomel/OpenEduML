import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import CardFooter from "../dashcomponents/Card/CardFooter.js";
import { connect } from "react-redux";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { setLaunchActivated, setLaunchDeactivated } from "redux/alerts/alerts.actions.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const HtmlTooltip = withStyles(() => ({
  tooltip: {
    maxWidth: 450,
    opacity: 1,
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

const ClusterAccessFree = ({
  currentUser,
  userUsage,
  launchActivated,
  setLaunchActivated,
  setLaunchDeactivated,
}) => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [active, setActive] = useState(false);
  const [clusterURL, setClusterURL] = useState(false);

  useEffect(() => {
    if (userUsage && userUsage.clusterAvailable == 1) setActive(true);
    if (currentUser.clusterURL) setClusterURL(currentUser.clusterURL);
    if (launchActivated && currentUser.clusterURL) setLaunchDeactivated();
  }, [launchActivated, userUsage]);

  const handlePlanPress = (e) => {
    e.preventDefault();
    window.location.href = `https://${clusterURL}`;
  };

  const launchCluster = async () => {
    try {
      if (!active) return;
      setLaunchActivated();
      let namespace = currentUser.id.toLowerCase();
      let body = {
        name: namespace,
        userId: currentUser.id,
      };
      api.post("/namespace/delete", {
        userId: currentUser.id,
      });
      await api.post("/jupyterhub/install", body);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <Card style={{ minHeight: 260 }}>
      <CardHeader color="primary6">
        <h4 style={{ margin: 0, fontWeight: 700, fontFamily: "Roboto Slab", fontSize: 19 }}>
          Access your Free Jupyter Notebook
        </h4>
      </CardHeader>
      <CardBody>
        <h4 style={{ marginTop: 10, fontFamily: "Montserrat", fontWeight: 400, fontSize: 18 }}>
          Notebook Ready to Launch{" "}
        </h4>
        <p
          className={classes.cardCategory}
          style={{
            marginBottom: 25,
            marginTop: 10,
            color: "#303030",
            fontSize: 14,
            fontFamily: "Montserrat",
          }}
        >
          With your free tier membership of OpenEduML you get 30 hours per month total to access
          your free online Jupyter Notebook! Click on the button below to be redirected to your
          online Jupyter notebook!
        </p>
        {launchActivated && <CircularProgress style={{ color: "#1d8cf8" }} />}
        {!launchActivated && active && clusterURL && (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handlePlanPress}
            startIcon={<PowerSettingsNewIcon />}
            style={{
              marginTop: 8,
              minWidth: 190,
              minHeight: 36,
              fontWeight: 700,
              backgroundColor: "green",
              fontFamily: "Montserrat",
            }}
          >
            {clusterURL}
          </Button>
        )}
        {!launchActivated && active && !clusterURL && (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={launchCluster}
            startIcon={<PowerSettingsNewIcon />}
            style={{
              marginTop: 8,
              minWidth: 190,
              minHeight: 36,
              fontWeight: 700,
              backgroundColor: "red",
              fontFamily: "Montserrat",
            }}
          >
            Launch
          </Button>
        )}
        {!active && (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<PowerSettingsNewIcon />}
            style={{
              marginTop: 8,
              minWidth: 190,
              minHeight: 36,
              fontWeight: 700,
              backgroundColor: "gray",
              fontFamily: "Montserrat",
            }}
          >
            UNAVAILABLE
          </Button>
        )}
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}></div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={classes2.typography}>
                The launch button will redirect your browser to OpenEduML's Jupyterhub which will
                grant you access to your own personal Jupyter Notebook. Please be sure to save your
                login credentials the first time you access your Jupyter Notebook
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <HelpOutlineIcon style={{ color: "#999", height: 18 }} />
        </HtmlTooltip>
      </CardFooter>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  userUsage: state.user.userUsage,
  launchActivated: state.alerts.launchActivated,
});

export default connect(mapStateToProps, { setLaunchActivated, setLaunchDeactivated })(
  ClusterAccessFree
);
