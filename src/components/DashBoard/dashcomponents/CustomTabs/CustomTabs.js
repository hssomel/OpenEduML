import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import styles from "assets/jss/material-dashboard-react/components/customTabsStyle.js";

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
          padding: 5,
        }}
      >
        <h4 style={{ margin: 0, fontWeight: 700, fontFamily: "Roboto Slab" }}>{title}</h4>
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
      <Paper
        className={classes.customScroll}
        style={{ maxHeight: 480, overflow: "auto", paddingLeft: 25, overflowX: "hidden" }}
      >
        {tabs.map((prop, index) => {
          if (index === value) {
            return <div key={index}>{prop.tabContent}</div>;
            // rendering <Tasks /> component from DetailedSpecs
          }
          return null;
        })}
      </Paper>
    </Card>
  );
}
