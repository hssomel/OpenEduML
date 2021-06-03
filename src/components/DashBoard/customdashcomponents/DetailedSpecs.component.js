import React from "react";
// @material-ui/icons
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
// core components
import Tasks from "../dashcomponents/Tasks/Tasks.js";
import CustomTabs from "../dashcomponents/CustomTabs/CustomTabs.js";
import { categories, free, plus, pro } from "../general.js";

const DetailedSpecs = () => {
  return (
    <CustomTabs
      title="Compare Jupyter Notebook Specs Between Tiers: "
      headerColor="primary3"
      tabs={[
        {
          tabName: "Free",
          tabIcon: MoneyOffIcon,
          tabContent: (
            <Tasks tasksIndexes={[0, 1, 2, 3, 4, 5, 6, 7]} tasks={free} categories={categories} />
          ),
        },
        {
          tabName: "Plus",
          tabIcon: AddBoxIcon,
          tabContent: (
            <Tasks tasksIndexes={[0, 1, 2, 3, 4, 5, 6, 7]} tasks={plus} categories={categories} />
          ),
        },
        {
          tabName: "Pro",
          tabIcon: AllInclusiveIcon,
          tabContent: (
            <Tasks tasksIndexes={[0, 1, 2, 3, 4, 5, 6, 7]} tasks={pro} categories={categories} />
          ),
        },
      ]}
    />
  );
};

export default DetailedSpecs;
