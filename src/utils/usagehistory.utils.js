let xLabels = [];
let dataPoints = [];

const getXLabels = () => {
  let x = new Date();
  let mo = x.getMonth() + 1;
  let day = x.getDate();
  let counter = 28;
  while (counter > 0) {
    if (day === 0) {
      day = 30;
      mo--;
    }
    xLabels.push("" + mo + "/" + day);
    counter--;
    day--;
    let a = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 4);
    dataPoints.push(a);
  }
  xLabels.reverse();
};
getXLabels();

//
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
    xPadding: 2,
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
          suggestedMin: 0,
          suggestedMax: 10,
          padding: 5,
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
          padding: 5,
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

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.9)");
    gradientStroke.addColorStop(0.5, "rgba(29,140,248,0.7)");
    gradientStroke.addColorStop(0.1, "rgba(29,140,248,0.4)");
    // gradientStroke.addColorStop(0.0, "rgba(29,140,248,0.1)"); //blue colors

    return {
      labels: xLabels,
      datasets: [
        {
          label: "Daily Usage",
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
          data: dataPoints,
        },
      ],
    };
  },

  options: chart_1_2_3_options,
};

module.exports = {
  chartExample1,
};
