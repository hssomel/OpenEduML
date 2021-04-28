import React from "react";
// core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CustomGridItem from "../dashcomponents/Grid/CustomGridItem";
import GridContainer from "../dashcomponents/Grid/GridContainer.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
// @material-ui/icons
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import styles from "../../../assets/jss/material-dashboard-react/components/tasksStyle";

var tasks = [
  "Monthly Price",
  "Hours included Per Month",
  "Hourly rate after included hours depleted",
  "Total Notebook Alloted RAM",
  "Total Notebook vCPUs",
  "Ability to Launch Multiple Kernels",
  "Ability to Launch GPU Kernels",
];

var free = ["$0", "15", "$0", "2 GB", "2", "No", "No"];
var plus = ["$10", "30", "$0.88", "4 GB", "4", "Yes", "No"];
var pro = ["$30", "40", "$2.02", "8 GB", "8", "Yes", "Yes"];
//
var tasksIndexes = [0, 1, 2, 3, 4, 5, 6];

const useStyles = makeStyles(styles);

const CompareTiers = () => {
  const classes = useStyles();
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
      <Paper
        className={classes.customScroll}
        style={{ maxHeight: 400, overflow: "auto", paddingLeft: 25, overflowX: "hidden" }}
      >
        <Table className={classes.table} style={{ marginTop: 5 }}>
          <TableBody>
            {tasksIndexes.map((value) => (
              <TableRow key={value} className={classes.tableRow}>
                <GridContainer>
                  <CustomGridItem xs={12} lg={3}>
                    <CardBody>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 400 }}>
                        {tasks[value]}
                      </p>
                    </CardBody>
                  </CustomGridItem>

                  <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
                    <CardBody style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 400 }}>
                        {free[value]}
                      </p>
                    </CardBody>
                  </CustomGridItem>

                  <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
                    <CardBody style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 400 }}>
                        {plus[value]}
                      </p>
                    </CardBody>
                  </CustomGridItem>

                  <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
                    <CardBody style={{ justifyContent: "center", display: "flex" }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 400 }}>
                        {pro[value]}
                      </p>
                    </CardBody>
                  </CustomGridItem>
                </GridContainer>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
};

export default CompareTiers;
