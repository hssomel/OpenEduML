import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentProfile, setUserUsage } from "../../redux/user/user.actions";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import DetailedSpecs from "./customdashcomponents/DetailedSpecs.component";
// GAUGES
import NotebookState from "components/DashBoard/gauges/NotebookState";
import TimeRemaining from "components/DashBoard/gauges/TimeRemaining";
import NotebookCPU from "components/DashBoard/gauges/NotebookCPU";
import NotebookGPU from "components/DashBoard/gauges/NotebookGPU";
import DaysLeft from "components/DashBoard/gauges/DaysLeft";
import CustomerTier from "components/DashBoard/gauges/CustomerTier";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/profile`,
  headers: {
    "Content-Type": "application/json",
  },
});

const Dashboard = ({ currentUser, setUserUsage, currentProfile, setCurrentProfile }) => {
  // EVENT HANDLERS ------------------------------>
  const fetchData = async () => {
    const res = await api.get(`/getprofile/${currentUser.id}`);
    const usage = await api.get(`/getstats/${currentUser.id}`);
    setCurrentProfile(res.data);
    setUserUsage(usage.data);
  };

  useEffect(() => {
    if (!currentProfile) {
      fetchData();
    }
  }, [currentUser]);
  // ----------------------------------------------->
  return (
    <div>
      <Grid container spacing={4} style={{ marginBottom: 10 }}>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <ClusterAccessFree />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DetailedSpecs />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={12}>
              <NotebookState />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <TimeRemaining />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <NotebookCPU />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <NotebookGPU />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <CustomerTier />
            </Grid>
          </Grid>

          <DaysLeft />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentProfile: state.user.currentProfile,
  userUsage: state.user.userUsage,
});

export default connect(mapStateToProps, { setCurrentProfile, setUserUsage })(Dashboard);
