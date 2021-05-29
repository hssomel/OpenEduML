import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { Line } from "react-chartjs-2";
import { chartExample1 } from "utils/usagehistory.utils";

const UsageHistory = ({ userUsage }) => {
  const [data, setData] = useState(null);
  // EVENT HANDLERS
  useEffect(() => {
    if (userUsage.length !== 0) setData(userUsage);
    else {
      let arr = [];
      arr.push(10);
      // setData(arr);
    }

    console.log(userUsage);
  }, []);

  return (
    <Card
      style={{
        height: 370,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 10,
        paddingLeft: 5,
        alignItems: "flex-start",
      }}
    >
      <CardHeader
        style={{
          paddingTop: 5,
          marginTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >
        <h5
          style={{
            marginTop: 0,
            marginBottom: 0,
            fontSize: 12,
            color: "#b4b4b4",
            fontWeight: 400,
            fontFamily: "Poppins",
          }}
        >
          Jupyter Notebook
        </h5>
        <h4
          style={{
            marginTop: 0,
            marginBottom: 0,
            fontSize: 24,
            color: "#b4b4b4",
            fontWeight: 300,
            fontFamily: "Poppins",
          }}
        >
          Daily Usage <span style={{ fontSize: 12 }}>(hrs)</span>
        </h4>
      </CardHeader>
      <CardBody
        style={{
          width: "100%",
          paddingLeft: 5,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <Line data={chartExample1["data1"]} options={chartExample1.options} />
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  userUsage: state.user.userUsage,
});

export default connect(mapStateToProps)(UsageHistory);
