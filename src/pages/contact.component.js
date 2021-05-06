import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import CustomSkinMap from "components/Contact/GoogleMap.component";
import Contact from "components/Contact/Contact";
import Header from "components/proTheme/Headers/ContactHeader.js";
import HeaderLinks from "components/proTheme/Headers/ContactHeaderLinks.js";
import Footer from "components/proTheme/Footers/ContactFooter.component";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

const ContactPage = () => {
  const classes = useStyles();
  React.useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
  }, []);

  return (
    <div>
      <Header
        brand="OPENEDUML"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />
      <div className={classes.bigMap}>
        <CustomSkinMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `100%`,
                borderRadius: "6px",
                overflow: "hidden",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Contact />
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

export default ContactPage;
