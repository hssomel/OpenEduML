import React from "react";
// @material-ui/icons
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
// core components
import Tasks from "../dashcomponents/Tasks/Tasks.js";
import CustomTabs from "../dashcomponents/CustomTabs/CustomTabs.js";
import { categories, free } from "../general.js";

const DetailedSpecs = () => {
  return (
    <CustomTabs
      title="Jupyter Notebook Specs: "
      headerColor="warning"
      tabs={[
        {
          tabName: "Free",
          tabIcon: MoneyOffIcon,
          tabContent: (
            <Tasks
              tasksIndexes={[0, 1, 2, 3, 4, 5, 6]}
              tasks={free}
              categories={categories}
            />
          ),
        },
        {
          tabName: "Plus",
          tabIcon: AddBoxIcon,
          tabContent: (
            <Tasks
              checkedIndexes={[0]}
              tasksIndexes={[0, 1]}
              tasks={free}
              categories={categories}
            />
          ),
        },
        {
          tabName: "Pro",
          tabIcon: AllInclusiveIcon,
          tabContent: (
            <Tasks
              checkedIndexes={[1]}
              tasksIndexes={[0, 1, 2]}
              tasks={free}
              categories={categories}
            />
          ),
        },
      ]}
    />
  );
};

export default DetailedSpecs;
