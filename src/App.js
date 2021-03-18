import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing-page.component";
import SignInSignUpPage from "./pages/sign-in-sign-up.component";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route
        exact
        path="/signin"
        render={(routeProps) => <SignInSignUpPage {...routeProps} />}
      />
    </Switch>
  );
};

export default App;
