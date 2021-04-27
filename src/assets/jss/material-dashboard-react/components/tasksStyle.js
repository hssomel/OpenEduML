import {
  primaryColor,
  dangerColor,
  grayColor,
} from "../../material-dashboard-react.js";
import tooltipStyle from "../../material-dashboard-react/tooltipStyle.js";
import checkboxAdnRadioStyle from "../../material-dashboard-react/checkboxAdnRadioStyle.js";
const tasksStyle = {
  ...tooltipStyle,
  ...checkboxAdnRadioStyle,
  table: {
    marginBottom: "0",
    overflow: "visible",
  },
  tableRow: {
    position: "relative",
    borderBottom: "1px solid " + grayColor[5],
  },
  tableActions: {
    display: "flex",
    border: "none",
    padding: "12px 8px !important",
    verticalAlign: "middle",
  },
  tableCell: {
    // ...defaultFont,
    padding: "8px",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontSize: "14px",
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  tableCell2: {
    // ...defaultFont,
    padding: "8px",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontSize: "14px",
  },
  tableCellRTL: {
    textAlign: "right",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor[0],
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor[0],
    boxShadow: "none",
  },
};
export default tasksStyle;
