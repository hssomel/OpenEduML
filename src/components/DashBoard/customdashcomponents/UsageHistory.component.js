import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Line } from "react-chartjs-2";
import { chartExample1 } from "utils/usagehistory.utils";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/api/stats`,
  headers: {
    "Content-Type": "application/json",
  },
});

const UsageHistory = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);
  // EVENT HANDLERS
  useEffect(() => {
    const fetchData = async () => {
      const monthlyData = await api.get(`/monthlyusage/${currentUser.id}`);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Card
      style={{
        height: 360,
        paddingTop: 0,
        paddingBottom: 10,
        marginTop: 10,
        alignItems: "flex-start",
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
      <CardBody style={{ width: "100%", paddingLeft: 5 }}>
        {loading ? (
          <div style={{ justifyContent: "center", display: "flex" }}>
            <CircularProgress />
          </div>
        ) : (
          <Line data={chartExample1["data1"]} options={chartExample1.options} />
        )}
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UsageHistory);
