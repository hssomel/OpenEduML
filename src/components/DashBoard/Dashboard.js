import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentProfile } from "../../redux/user/user.actions";
import UsageHistory from "./customdashcomponents/UsageHistory.component";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import PieChart from "./customdashcomponents/PieChart.component";
import BillingChart from "./customdashcomponents/BillingChart.component";
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

const Dashboard = ({ currentUser, currentProfile, setCurrentProfile }) => {
  // EVENT HANDLERS ------------------------------>
  const fetchData = async () => {
    const res = await api.get(`/getprofile/${currentUser.id}`);
    setCurrentProfile(res.data);
  };

  useEffect(() => {
    if (!currentProfile) {
      fetchData();
    }
  }, []);
  // ----------------------------------------------->
  return (
    <div>
      <Grid container style={{ marginBottom: 10 }}>
        <Grid item xs={12}>
          <UsageHistory />
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBottom: 15 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <NotebookState />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TimeRemaining />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <NotebookCPU />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <NotebookGPU />
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: 10 }}>
        <Grid item xs={12} lg={4} style={{ paddingTop: 0 }}>
          <ClusterAccessFree />
        </Grid>
        <Grid item xs={12} lg={4} style={{ paddingTop: 0 }}>
          <BillingChart />
        </Grid>
        <Grid item xs={12} lg={4} style={{ paddingTop: 0 }}>
          <PieChart />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentProfile: state.user.currentProfile,
});

export default connect(mapStateToProps, { setCurrentProfile })(Dashboard);
