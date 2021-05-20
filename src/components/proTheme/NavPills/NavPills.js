import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import styles from "assets/jss/material-kit-pro-react/components/navPillsStyle.js";

const useStyles = makeStyles(styles);
export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
  };

  const { tabs, color, horizontal, alignCenter, onClick } = props;
  const classes = useStyles();
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined,
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone,
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined,
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            onClick={onClick}
            {...icon}
            classes={{
              root: pillsClasses,
              label: classes.label,
              selected: classes[color],
            }}
          />
        );
      })}
    </Tabs>
  );

  // ----------------------------------------------------->
  return <div>{tabButtons}</div>;
}

NavPills.defaultProps = {
  active: 0,
  color: "primary",
};
