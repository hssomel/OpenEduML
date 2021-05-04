import React from "react";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import { Line } from "react-chartjs-2";
import { chartExample1 } from "utils/usagehistory.utils";

const UsageHistory = () => {
  return (
    <Card
      style={{
        height: 360,
        paddingTop: 0,
        paddingBottom: 10,
        marginTop: 10,
        alignItems: "center",
        paddingLeft: 0,
      }}
    >
      <CardHeader
        style={{
          paddingTop: 5,
          marginTop: 0,
          paddingBottom: 0,
        }}
      >
        <h4
          style={{
            marginTop: 10,
            marginBottom: 0,
            fontSize: 22,
            color: "#b4b4b4",
            fontWeight: 700,
          }}
        >
          Daily Usage
        </h4>
      </CardHeader>
      <CardBody style={{ width: "100%", paddingLeft: 5 }}>
        <Line data={chartExample1["data1"]} options={chartExample1.options} />
      </CardBody>
    </Card>
  );
};

export default UsageHistory;
