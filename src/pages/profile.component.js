import React, { useState, useEffect, createRef } from "react";
import AdminNavbar from "components/Navbars/admin.navbar.js";
import MiniSideBar from "components/Sidebar/MiniSideBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/DashBoard/dashcomponents/Card/Card.js";
import CardHeader from "components/DashBoard/dashcomponents/Card/CardHeader.js";
import CardIcon from "components/DashBoard/dashcomponents/Card/CardIcon.js";
import CardFooter from "components/DashBoard/dashcomponents/Card/CardFooter.js";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import Warning from "@material-ui/icons/Warning";
import Danger from "components/DashBoard/dashcomponents/Typography/Danger.js";
// core components
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import routes from "../routes/routes.js";

const useStyles = makeStyles(styles);

const ProfilePage = ({ ...rest }) => {
  const classes = useStyles();
  const mainPanel = createRef();
  const [sideOpen, setSideOpen] = useState(false);
  const [dashPadding, setDashPadding] = useState(100);
  const [navbarColor, setNavbarColor] = useState("transparent");
  //
  //  event handlers
  const openSideBar = () => {
    setSideOpen(!sideOpen);
    let pad = dashPadding === 100 ? 220 : 100;
    setDashPadding(pad);
  };

  const updateNavColor = () => {
    const inner = document.getElementById("myDiv");
    if (inner.scrollTop > 5) setNavbarColor("info");
    else setNavbarColor("transparent");
  };

  useEffect(() => {
    document.getElementById("myDiv").addEventListener("scroll", updateNavColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavColor);
    };
  }, []);
  //
  return (
    <>
      <div className={classes.wrapper} style={{ backgroundColor: "#eeeeee" }}>
        <AdminNavbar
          routes={routes}
          color={navbarColor}
          toggleOpen={openSideBar}
          sideOpen={sideOpen}
        />
        <MiniSideBar sideOpen={sideOpen} />
        <div
          className={classes.mainPanel}
          id="myDiv"
          ref={mainPanel}
          style={{ overflowX: "hidden", paddingLeft: dashPadding, paddingTop: 10 }}
        >
          <div className={classes.content}>
            <div className={classes.container} style={{ marginTop: 36 }}>
              <div>
                <Grid
                  container
                  spacing={4}
                  style={{ marginTop: 10, backgroundColor: "salmon" }}
                >
                  <Grid item xs={12} lg={9} style={{ paddingTop: 0, backgroundColor: "cyan" }}>
                    <Card>
                      <CardHeader color="primary5" stats icon>
                        <CardIcon color="primary5">
                          <BatteryAlertIcon />
                        </CardIcon>
                        <p className={classes.cardCategory}>Notebook/Cluster State</p>
                        <h5 style={{ color: "black" }}>Off</h5>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <Danger>
                            <Warning />
                          </Danger>
                          <a href="#pablo">Ready to Launch</a>
                        </div>
                      </CardFooter>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    style={{ paddingTop: 0, backgroundColor: "lawngreen" }}
                  >
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <AccessTime />
                        </CardIcon>
                        <p className={classes.cardCategory}>Time Remaining</p>
                        <h5 style={{ color: "black" }}>00:30:00</h5>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <DateRange />
                          Date Last Accessed: 5/04/21
                        </div>
                      </CardFooter>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
