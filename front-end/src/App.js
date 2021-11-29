import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import FindHospital from "./pages/FindHospital";
import ChoiceCity from "./pages/ChoiceCity";
import HospitalList from "./pages/HospitalList";
import Page0 from "./pages/page0";
import ReviewList from "./pages/ReviewList";
import WriteReview from "./pages/WriteReview";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/findHospital" component={FindHospital} />
        <Route exact path="/choiceCity" component={ChoiceCity} />
        <Route exact path="/hospitalList" component={HospitalList} />
        <Route exact path="/page0" component={Page0} />
        <Route exact path="/reviewList" component={ReviewList} />
        <Route exact path="/writeReview" component={WriteReview} />
      </Switch>
    </Router>
  );
}

export default App;
