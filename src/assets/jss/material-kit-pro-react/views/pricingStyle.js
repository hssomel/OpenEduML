import {
  container,
  container2,
  title,
  main,
  mainRaised,
  whiteColor,
  mrAuto,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const pricingStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1,
  },
  container2: {
    ...container2,
    zIndex: 1,
    backgroundColor: "",
  },
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor,
    },
  },
  textCenter: {
    textAlign: "center",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
  // stripe stuff
  stripeDemo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "40%",
    backgroundColor: "yellow",
  },
  DemoWrapper: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    height: "55vh",
    backgroundColor: "red",
  },
};

export default pricingStyle;
