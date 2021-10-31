import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import FindHospital from "./pages/FindHospital";
import ChoiceCity from "./pages/ChoiceCity";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/findHospital" component={FindHospital} />
        <Route exact path="/choiceCity" component={ChoiceCity} />
      </Switch>
    </Router>
  );
}

export default App;
