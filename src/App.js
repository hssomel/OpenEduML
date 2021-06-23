import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Pages
import LandingPage from "./pages/landing.page";
import SignUpPage from "./pages/signup.page";
import PaymentPage from "./pages/payment.page";
import ContactPage from "./pages/contact.page";
import ConsolePage from "./pages/console.page";
// --------------------------------------------------->
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

const App = ({ currentUser, setCurrentUser }) => {
  //
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          const { email, clusterURL } = snapShot.data();
          setCurrentUser({
            id: snapShot.id,
            email,
            clusterURL,
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  });
  //
  return (
    <Switch>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route
        path="/signin"
        render={(routeProps) =>
          currentUser ? <Redirect to="/admin" {...routeProps} /> : <SignUpPage {...routeProps} />
        }
      />
      <Route
        exact
        path="/admin"
        render={(routeProps) =>
          currentUser ? (
            <Redirect to="/admin/dashboard" {...routeProps} />
          ) : (
            <Redirect to="/signin" {...routeProps} />
          )
        }
      />
      <Route
        exact
        path="/admin/dashboard"
        render={(routeProps) =>
          currentUser ? <ConsolePage {...routeProps} /> : <Redirect to="/signin" {...routeProps} />
        }
      />
      <Route
        exact
        path="/admin/profile"
        render={(routeProps) =>
          currentUser ? <ConsolePage {...routeProps} /> : <Redirect to="/signin" {...routeProps} />
        }
      />
      <Route exact path="/contact" component={ContactPage} />
      <Route
        exact
        path="/admin/payment"
        render={(routeProps) =>
          currentUser ? <PaymentPage {...routeProps} /> : <Redirect to="/signin" {...routeProps} />
        }
      />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
