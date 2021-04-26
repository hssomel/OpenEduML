import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../dashcomponents/Card/Card.js";
import CardHeader from "../dashcomponents/Card/CardHeader.js";
import CardBody from "../dashcomponents/Card/CardBody.js";
import TierTable from "./TierTable.compareTiers.component";
import CustomGridItem from "../dashcomponents/Grid/CustomGridItem";
import GridContainer from "../dashcomponents/Grid/GridContainer.js";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const CompareTiers = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <GridContainer>
          <CustomGridItem xs={12} lg={3} style={{ paddingLeft: "10px" }}>
            <h4 className={classes.cardTitleWhite} style={{ fontWeight: 500 }}>
              Compare Tiers
            </h4>
          </CustomGridItem>
          <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
            <h4 className={classes.cardTitleWhite} style={{ fontWeight: 500 }}>
              Free
            </h4>
          </CustomGridItem>
          <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
            <h4 className={classes.cardTitleWhite} style={{ fontWeight: 500 }}>
              Plus
            </h4>
          </CustomGridItem>
          <CustomGridItem xs={12} lg={3} style={{ justifyContent: "center" }}>
            <h4 className={classes.cardTitleWhite} style={{ fontWeight: 500 }}>
              Pro
            </h4>
          </CustomGridItem>
        </GridContainer>
      </CardHeader>
      <CardBody>
        <TierTable />
      </CardBody>
    </Card>
  );
};

export default CompareTiers;
