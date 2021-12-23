import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import FindHospital from "./pages/FindHospital";
import ChoiceCity from "./pages/ChoiceCity";
import FindMedicine from "./pages/FindMedicine";
import FindPackage from "./pages/FindPackage";
import FindGrain from "./pages/FindGrain";
import FindGrainText from "./pages/FindGrainText";
import FindmediText from "./pages/FindmediText";
import MatchMedicine from "./pages/MatchMedicine";
import BasicMediInfo from "./pages/BasicMediInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/findHospital" component={FindHospital} />
        <Route exact path="/choiceCity" component={ChoiceCity} />
        <Route exact path="/FindMedicine" component={FindMedicine} />
        <Route exact path="/FindPackage" component={FindPackage}/>
        <Route exact path="/FindGrain" component={FindGrain}/>
        <Route exact path="/FindmediText" component={FindmediText}/>
        <Route exact path="/FindGrainText" component={FindGrainText}/>
        <Route exact path="/MatchMedicine" component = {MatchMedicine}/>
        <Route exact path="/BasicMediInfo" component ={BasicMediInfo}/>
        </Switch>
    </Router>
  );
}

export default App;
