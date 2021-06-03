import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentProfile, setUserUsage } from "../../redux/user/user.actions";
import UsageHistory from "./customdashcomponents/UsageHistory.component";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import BillingChart from "./customdashcomponents/BillingChart.component";
import DetailedSpecs from "./customdashcomponents/DetailedSpecs.component";
// GAUGES
import NotebookState from "components/DashBoard/gauges/NotebookState";
import TimeRemaining from "components/DashBoard/gauges/TimeRemaining";
import NotebookCPU from "components/DashBoard/gauges/NotebookCPU";
import NotebookGPU from "components/DashBoard/gauges/NotebookGPU";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/api/profile`,
  headers: {
    "Content-Type": "application/json",
  },
});

const Dashboard = ({ currentUser, setUserUsage, currentProfile, setCurrentProfile }) => {
  // EVENT HANDLERS ------------------------------>
  // const fetchData = async () => {
  //   const res = await api.get(`/getprofile/${currentUser.id}`);
  //   const usage = await api.get(`/getstats/${currentUser.id}`);
  //   setCurrentProfile(res.data);
  //   setUserUsage(usage.data);
  // };

  // useEffect(() => {
  //   if (!currentProfile) {
  //     fetchData();
  //   }
  // }, [currentUser]);
  // ----------------------------------------------->
  return (
    <div>
      <Grid container spacing={4} style={{ marginBottom: 10 }}>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <UsageHistory />
            </Grid>
            <Grid item xs={5}>
              <BillingChart />
            </Grid>
          </Grid>
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
              <NotebookCPU />
            </Grid>
          </Grid>

          <NotebookGPU />
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
