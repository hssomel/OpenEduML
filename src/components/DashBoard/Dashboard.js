import React from "react";
// core components
import Grid from "@material-ui/core/Grid";
// dashboard modular components
import StatusGauges from "./customdashcomponents/StatusGauges.component";
import UsageHistory from "./customdashcomponents/UsageHistory.component";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import PieChart from "./customdashcomponents/PieChart.component";
import BillingChart from "./customdashcomponents/BillingChart.component";

const Dashboard = () => {
  return (
    <div>
      <Grid container style={{ marginBottom: 10 }}>
        <Grid item xs={12}>
          <UsageHistory />
        </Grid>
      </Grid>
      <StatusGauges />
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

export default Dashboard;
