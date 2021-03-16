import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing-page.component";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
};

export default App;
