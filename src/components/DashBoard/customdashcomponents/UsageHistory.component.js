import React from "react";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import { Line } from "react-chartjs-2";

let chart_1_2_3_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};

let chartExample1 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.1, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [130, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        },
      ],
    };
  },

  options: chart_1_2_3_options,
};

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
            marginBottom: 7,
            color: "#1f8ef1",
            fontWeight: 200,
            fontSize: 24,
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
