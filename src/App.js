import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Pages
import LandingPage from "./pages/landing.page";
import SignInSignUpPage from "./pages/sign-in-sign-up.page";
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
          const { username, email } = snapShot.data();
          setCurrentUser({
            id: snapShot.id,
            username,
            email,
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
        exact
        path="/signin"
        render={(routeProps) =>
          currentUser ? <Redirect to="/admin" {...routeProps} /> : <SignInSignUpPage />
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
      <Route exact path="/admin/dashboard" component={ConsolePage} />
      <Route exact path="/admin/profile" component={ConsolePage} />
      <Route exact path="/admin/contact" component={ContactPage} />
      <Route exact path="/admin/payment" component={PaymentPage} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
