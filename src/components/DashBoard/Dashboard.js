import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
// import axios from "axios";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { setCurrentProfile } from "../../redux/user/user.actions";
// dashboard modular components
import UsageHistory from "./customdashcomponents/UsageHistory.component";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import PieChart from "./customdashcomponents/PieChart.component";
import BillingChart from "./customdashcomponents/BillingChart.component";
// GAUGES
import NotebookState from "components/DashBoard/gauges/NotebookState";
import TimeRemaining from "components/DashBoard/gauges/TimeRemaining";
import NotebookCPU from "components/DashBoard/gauges/NotebookCPU";
import NotebookGPU from "components/DashBoard/gauges/NotebookGPU";

// const api = axios.create({
//   baseURL: `${process.env.REACT_APP_ADDR}/api/stats`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const Dashboard = ({ currentUser, currentProfile, setCurrentProfile }) => {
  // EVENT HANDLERS ------------------------------>
  const fetchData = async (ref) => {
    const snapShot = await ref.get();
    if (snapShot.exists) {
      console.log(snapShot.data());
      const { tier, country, lastname, firstname, occupation, postal, college } = snapShot.data();
      setCurrentProfile({
        tier,
        country,
        lastname,
        firstname,
        occupation,
        postal,
        college,
      });
    }
  };

  useEffect(() => {
    if (!currentProfile) {
      const dbRef = firebase.firestore();
      const profileRef = dbRef.doc(`profiles/${currentUser.id}`);
      fetchData(profileRef);
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
