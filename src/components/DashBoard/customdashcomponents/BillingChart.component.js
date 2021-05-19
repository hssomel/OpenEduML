import React from "react";
import { Bar } from "react-chartjs-2";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import { chartExample3 } from "utils/billingchart.utils";

const BillingChart = () => {
  return (
    <Card style={{ minHeight: 370 }}>
      <CardHeader color="primary3">
        <h4 style={{ margin: 0, fontWeight: 700 }}>Monthly Billing History</h4>
      </CardHeader>
      <h5
        style={{
          // marginTop: 0,
          marginTop: 10,
          marginLeft: 16,
          marginBottom: -10,
          fontSize: 16,
          color: "#b4b4b4",
          fontWeight: 300,
          fontFamily: "Poppins",
        }}
      >
        $USD
      </h5>
      <CardBody style={{ marginTop: 0 }}>
        <Bar data={chartExample3.data} options={chartExample3.options} />
      </CardBody>
    </Card>
  );
};

export default BillingChart;
