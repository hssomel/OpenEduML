import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import CustomGridItem from "../Grid/CustomGridItem";
import GridContainer from "../Grid/GridContainer.js";
import CardBody from "../Card/CardBody.js";
// core components
import styles from "../../../../assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const classes = useStyles();
  const { tasksIndexes, tasks, categories } = props;

  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.map((value) => (
          <TableRow key={value} className={classes.tableRow}>
            <GridContainer>
              <CustomGridItem xs={12} lg={7} style={{ justifyContent: "flex-start", marginTop: 5 }}>
                <CardBody style={{ fontSize: 15, fontFamily: "Roboto" }}>
                  {categories[value]}
                </CardBody>
              </CustomGridItem>
              <CustomGridItem xs={12} lg={5} style={{ justifyContent: "center" }}>
                <CardBody
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    fontFamily: "Roboto",
                    fontSize: 15,
                  }}
                >
                  {tasks[value]}
                </CardBody>
              </CustomGridItem>
            </GridContainer>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
