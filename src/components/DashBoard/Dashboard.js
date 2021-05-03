import React from "react";
// core components
import Grid from "@material-ui/core/Grid";
// dashboard modular components
import StatusGauges from "./customdashcomponents/StatusGauges.component";
import UsageChart from "./customdashcomponents/UsageChart.component";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import DetailedSpecs from "./customdashcomponents/DetailedSpecs.component";
import CompareTiers from "./customdashcomponents/CompareTiers.component";
import BillingChart from "./customdashcomponents/BillingChart.component";

const Dashboard = () => {
  return (
    <div>
      {/* <Grid container>
      <Grid item xs={12} style={{ backgroundColor: "red" }}>
        <UsageChart />
      </Grid>
    </Grid> */}
      <StatusGauges />
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} style={{ paddingTop: 0 }}>
          <ClusterAccessFree />
        </Grid>
        <Grid item xs={12} lg={6} style={{ paddingTop: 0 }}>
          <DetailedSpecs />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} style={{ paddingTop: 0 }}>
          <CompareTiers />
        </Grid>
        <Grid item xs={12} lg={6} style={{ paddingTop: 0 }}>
          <BillingChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
