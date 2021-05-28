import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/3d.svg";
import { connect } from "react-redux";
import { clearProfile } from "../../redux/user/user.actions";
import { auth } from "../../firebase/firebase.utils";
// reactstrap components
import {
  Collapse,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
//
const NavbarMain = ({ currentUser, clearProfile }) => {
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
  //
  const handleSignOut = async () => {
    try {
      clearProfile();
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
          <UncontrolledDropdown className="button-dropdown" style={{ marginRight: -20 }}>
            <Link to="/">
              <Logo style={styles.logo} />
            </Link>
          </UncontrolledDropdown>
          <NavLink to="/" tag={Link} style={{ fontSize: 15, fontWeight: 700 }}>
            OpenEduML
          </NavLink>
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
            <Nav navbar>
              <NavItem>
                {currentUser ? (
                  <div onClick={() => handleSignOut()}>
                    <NavLink to="/" tag={Link} style={{ fontSize: 15, fontWeight: 700 }}>
                      SIGN OUT
                    </NavLink>
                  </div>
                ) : (
                  <NavLink to="/signin" tag={Link} style={{ fontSize: 15, fontWeight: 700 }}>
                    LOGIN
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                <NavLink to="/admin" tag={Link} style={{ fontSize: 15, fontWeight: 700 }}>
                  CONSOLE
                </NavLink>
              </NavItem>
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

export default connect(mapStateToProps, { clearProfile })(NavbarMain);

const styles = {
  logo: {
    height: 26,
    width: 26,
    marginBottom: 5,
  },
};
