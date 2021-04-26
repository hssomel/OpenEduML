import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import CustomGridItem from "../dashcomponents/Grid/CustomGridItem";
import GridContainer from "../dashcomponents/Grid/GridContainer.js";
// @material-ui/icons
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

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

var free = ["$0", "15", "$0", "2GB", "2", "No", "No"];
var plus = ["$10", "30", "$0.88", "4GB", "4", "Yes", "No"];
var pro = ["$30", "40", "$2.02", "8GB", "8", "Yes", "Yes"];
//
var tasksIndexes = [0, 1, 2, 3, 4, 5, 6];

const useStyles = makeStyles(styles);

const TierTable = () => {
  const classes = useStyles();
  //
  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.map((value) => (
          <TableRow key={value} className={classes.tableRow}>
            <GridContainer>
              <CustomGridItem xs={12} lg={3}>
                <TableCell className={classes.tableCell2}>
                  {tasks[value]}
                </TableCell>
              </CustomGridItem>

              <CustomGridItem
                xs={12}
                lg={3}
                style={{ justifyContent: "center" }}
              >
                <TableCell style={{ border: "none" }}>{free[value]}</TableCell>
              </CustomGridItem>

              <CustomGridItem
                xs={12}
                lg={3}
                style={{ justifyContent: "center" }}
              >
                <TableCell style={{ border: "none" }}>{plus[value]}</TableCell>
              </CustomGridItem>

              <CustomGridItem
                xs={12}
                lg={3}
                style={{ justifyContent: "center" }}
              >
                <TableCell style={{ border: "none" }}>{pro[value]}</TableCell>
              </CustomGridItem>
            </GridContainer>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TierTable;
