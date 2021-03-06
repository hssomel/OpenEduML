import { transition, container } from "../../material-dashboard-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    // maxHeight: "100%",
    height: "95vh",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "0px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;

// const appStyle = (theme) => ({
//   wrapper: {
//     position: "relative",
//     top: "0",
//     height: "100vh",
//   },
//   mainPanel: {
//     [theme.breakpoints.up("lg")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//     overflow: "auto",
//     position: "relative",
//     float: "right",
//     ...transition,
//     maxHeight: "100%",
//     width: "100%",
//     overflowScrolling: "touch",
//   },
//   content: {
//     marginTop: "0px",
//     padding: "30px 15px",
//     minHeight: "calc(100vh - 123px)",
//   },
//   container,
//   map: {
//     marginTop: "70px",
//   },
// });
