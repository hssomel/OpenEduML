import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Pages
import TestPage from "./pages/testpage.component";
import LandingPage from "./pages/landing-page.component";
import SignInSignUpPage from "./pages/sign-in-sign-up.component";
import AdminPage from "./pages/admin.component";
import PaymentPage from "./pages/payment.component";
import ProfilePage from "./pages/profile.component";
import ContactPage from "./pages/contact.component";
//
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

const App = ({ currentUser, setCurrentUser }) => {
  //
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          const { displayName, email } = snapShot.data();
          setCurrentUser({
            id: snapShot.id,
            displayName: displayName,
            email: email,
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
      <Route exact path="/admin/dashboard" component={AdminPage} />
      <Route exact path="/admin/profile" render={(props) => <ProfilePage {...props} />} />
      <Route exact path="/testpage" component={TestPage} />
      <Route exact path="/admin/contact" render={(props) => <ContactPage {...props} />} />
      <Route exact path="/admin/payment" render={(props) => <PaymentPage {...props} />} />
      <Route
        exact
        path="/admin/upgrade"
        render={() =>
          currentUser ? <Redirect to="/admin/payment" /> : <Redirect to="/signin" />
        }
      />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
