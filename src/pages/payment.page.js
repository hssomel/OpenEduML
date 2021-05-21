import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Header from "components/proTheme/Headers/ContactHeader.js";
import HeaderLinks from "components/proTheme/Headers/ContactHeaderLinks.js";
import Pricing from "components/Pricing/Pricing";
import Parallax from "components/proTheme/Parallax/Parallax";
import GridContainer from "components/proTheme/Grid/GridContainer.js";
import GridItem from "components/proTheme/Grid/GridItem.js";
import bgImage from "assets/img/infinity.jpg";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import Footer from "components/proTheme/Footers/ContactFooter.component.js";
const useStyles = makeStyles(pricingStyle);

const PaymentPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Header brand="OPENEDUML" links={<HeaderLinks dropdownHoverColor="dark" />} fixed color="dark" />
      <Parallax image={`url(${bgImage})`} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
            >
              <h1 className={classes.title}>Let{"'"}s get started</h1>
              <h4>
                To get started, you will need to choose a plan for your needs. You can opt in for the monthly
                of annual options and go with one of the three listed below.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Pricing />
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Link to="/" className={classes.block}>
                    OPENEDUML
                  </Link>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Link to="/" className={classes.block}>
                    About us
                  </Link>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>&copy; {1900 + new Date().getYear()}</div>
          </div>
        }
      />
    </div>
  );
};

export default PaymentPage;
