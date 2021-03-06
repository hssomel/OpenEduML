import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearProfile } from "../../redux/user/user.actions";
import { auth } from "../../firebase/firebase.utils";
import { setLaunchDeactivated } from "redux/alerts/alerts.actions.js";
import { Collapse, Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";
//
const NavbarMain = ({ currentUser, clearProfile, route, setLaunchDeactivated }) => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  // lifecycle
  useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const handleSignOut = async () => {
    try {
      clearProfile();
      setLaunchDeactivated();
      await auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        color="#20232a"
        style={{ backgroundColor: "#20232a" }}
      >
        <Container>
          {route.path !== "/" && (
            <NavLink to="/" tag={Link} style={{ fontSize: 14, fontWeight: 700 }}>
              OPENEDUML
            </NavLink>
          )}

          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar style={{ paddingRight: 75 }}>
              <NavItem>
                {currentUser ? (
                  <div onClick={() => handleSignOut()}>
                    <NavLink to="/" tag={Link} style={{ fontSize: 14, fontWeight: 700 }}>
                      SIGN OUT
                    </NavLink>
                  </div>
                ) : (
                  <NavLink to="/signin" tag={Link} style={{ fontSize: 14, fontWeight: 700 }}>
                    LOGIN
                  </NavLink>
                )}
              </NavItem>
              {currentUser && (
                <NavItem>
                  <NavLink to="/admin" tag={Link} style={{ fontSize: 14, fontWeight: 700 }}>
                    CONSOLE
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { clearProfile, setLaunchDeactivated })(NavbarMain);
