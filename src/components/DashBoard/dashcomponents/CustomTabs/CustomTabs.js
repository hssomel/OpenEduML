import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
// core components
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";

import styles from "../../../../assets/jss/material-dashboard-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title } = props;

  return (
    <Card plain={plainTabs}>
      <CardHeader
        color={headerColor}
        plain={plainTabs}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: 0, fontWeight: 700 }}>{title}</h4>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, index) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={index}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      {/* only rendering one tab/set of tasks at a time */}
      <Paper style={{ maxHeight: 300, overflow: "auto", paddingLeft: 25 }}>
        {tabs.map((prop, index) => {
          if (index === value) {
            return <div key={index}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </Paper>
    </Card>
  );
}
