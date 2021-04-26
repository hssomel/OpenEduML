import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tasks from "../dashcomponents/Tasks/Tasks.js";
import CustomTabs from "../dashcomponents/CustomTabs/CustomTabs.js";
import { bugs, website, server } from "../general.js";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const DetailedSpecs = () => {
  const classes = useStyles();
  return (
    <CustomTabs
      title="Tasks:"
      headerColor="primary"
      tabs={[
        {
          tabName: "Bugs",
          tabIcon: BugReport,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
            />
          ),
        },
        {
          tabName: "Websites",
          tabIcon: Code,
          tabContent: (
            <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
          ),
        },
        {
          tabName: "Server",
          tabIcon: Cloud,
          tabContent: (
            <Tasks
              checkedIndexes={[1]}
              tasksIndexes={[0, 1, 2]}
              tasks={server}
            />
          ),
        },
      ]}
    />
  );
};

export default DetailedSpecs;
