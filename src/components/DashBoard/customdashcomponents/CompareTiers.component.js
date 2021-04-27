import React from "react";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import TierTable from "./TierTable.compareTiers.component";
import CustomGridItem from "../dashcomponents/Grid/CustomGridItem";
import GridContainer from "../dashcomponents/Grid/GridContainer.js";
import Paper from "@material-ui/core/Paper";

const CompareTiers = () => {
  return (
    <Card>
      <CardHeader color="primary">
        <GridContainer>
          <CustomGridItem xs={12} lg={3} style={{ paddingLeft: "10px" }}>
            <h4 style={{ margin: 5, fontWeight: 700 }}>Compare Tiers</h4>
          </CustomGridItem>
          <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
            <h4 style={{ margin: 5, fontWeight: 700 }}>Free</h4>
          </CustomGridItem>
          <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
            <h4 style={{ margin: 5, fontWeight: 700, marginLeft: 24 }}>Plus</h4>
          </CustomGridItem>
          <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
            <h4 style={{ margin: 5, fontWeight: 700, marginLeft: 48 }}>Pro</h4>
          </CustomGridItem>
        </GridContainer>
      </CardHeader>
      <Paper style={{ maxHeight: 400, overflow: "auto", paddingLeft: 25 }}>
        <TierTable />
      </Paper>
    </Card>
  );
};

export default CompareTiers;
