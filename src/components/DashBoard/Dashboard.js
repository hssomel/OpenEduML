import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "./dashcomponents/Grid/GridItem.js";
import GridContainer from "./dashcomponents/Grid/GridContainer.js";
import Table from "./dashcomponents/Table/Table.js";
import Card from "./dashcomponents/Card/Card.js";
import CardHeader from "./dashcomponents/Card/CardHeader.js";
import CardBody from "./dashcomponents/Card/CardBody.js";
import CardFooter from "./dashcomponents/Card/CardFooter.js";
// dashboard modular components
import ClusterAccessFree from "./customdashcomponents/ClusterAccess.component";
import FreeVsPremium from "./customdashcomponents/FreeVsPremium.component";
import NotebookState from "./customdashcomponents/NotebookState.component";
import TimeRemaining from "./customdashcomponents/TimeRemaining.component";
import Resources from "./customdashcomponents/Resources.component";
import GpuResources from "./customdashcomponents/GpuResources.component";

import { emailsSubscriptionChart } from "./charts.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} lg={3}>
          <NotebookState />
        </GridItem>
        <GridItem xs={12} sm={6} lg={3}>
          <TimeRemaining />
        </GridItem>
        <GridItem xs={12} sm={6} lg={3}>
          <Resources />
        </GridItem>
        <GridItem xs={12} sm={6} lg={3}>
          <GpuResources />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <ClusterAccessFree />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaigns Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <FreeVsPremium />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Dashboard;
