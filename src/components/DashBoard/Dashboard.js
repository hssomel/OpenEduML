import React from "react";
// core components
import GridItem from "./dashcomponents/Grid/GridItem.js";
import GridContainer from "./dashcomponents/Grid/GridContainer.js";
// dashboard modular components
import StatusGauges from "./customdashcomponents/StatusGauges.component";
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import DetailedSpecs from "./customdashcomponents/DetailedSpecs.component";
import CompareTiers from "./customdashcomponents/CompareTiers.component";
import BillingChart from "./customdashcomponents/BillingChart.component";

const Dashboard = () => {
  return (
    <div>
      <StatusGauges />
      <GridContainer>
        <GridItem xs={12} lg={6}>
          <ClusterAccessFree />
        </GridItem>
        <GridItem xs={12} lg={6}>
          <DetailedSpecs />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} lg={6}>
          <CompareTiers />
        </GridItem>
        <GridItem xs={12} lg={6}>
          <BillingChart />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Dashboard;
