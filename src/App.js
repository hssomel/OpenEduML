import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page.component";
import SignInSignUpPage from "./pages/sign-in-sign-up.component";
import DashBoardPage from "./pages/dashboard.component";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route
        exact
        path="/signin"
        render={(routeProps) => <SignInSignUpPage {...routeProps} />}
      />
      <Route
        exact
        path="/dashboard"
        render={(routeProps) => <DashBoardPage {...routeProps} />}
      />
    </Switch>
  );
};

export default App;
