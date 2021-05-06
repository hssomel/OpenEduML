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
      <CardBody style={{ marginTop: 10 }}>
        <Bar data={chartExample3.data} options={chartExample3.options} />
      </CardBody>
    </Card>
  );
};

export default BillingChart;
