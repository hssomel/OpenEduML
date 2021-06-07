import {
  defaultFont,
  container,
  primaryColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "13px",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 30px 5px 0px",
    margin: "0",
    fontSize: "13px",
    float: "right!important",
    fontWeight: 400,
  },
  right2: {
    padding: "15px 90px 15px 0px",
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    color: "white",
    fontWeight: 400,
  },
  left2: {
    padding: "15px 0px 15px 130px",
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    color: "white",
    fontWeight: 500,
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid " + grayColor[11],
    padding: "10px 0px 0px 0px",
    ...defaultFont,
  },
  container,
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  container2: {
    backgroundColor: "#20232a",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  list2: {
    marginBottom: "0",
    padding: "0",
    paddingLeft: 60,
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
};
export default footerStyle;
