import React from "react";
import { Pie } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import { chartExample10 } from "utils/billingchart.utils";

const PieChart = () => {
  return (
    <Card style={{ minHeight: 370 }}>
      <CardHeader color="primary4">
        <h4 style={{ margin: 0, fontWeight: 700, fontFamily: "Poppins" }}>Billing Breakdown</h4>
      </CardHeader>
      <CardBody style={{ marginTop: 10, paddingBottom: 5 }}>
        <Grid
          container
          style={{
            minHeight: 280,
            maxHeight: 310,
            padding: 0,
            margin: 0,
            marginBottom: 0,
          }}
        >
          <Grid
            item
            sm={6}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Pie data={chartExample10.data} options={chartExample10.options} />
          </Grid>
          <Grid
            item
            sm={6}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p>Breakdown</p>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default PieChart;
