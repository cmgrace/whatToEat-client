import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import Header from "../Header/Header";
import RestaurantCards from "../RestaurantCards/RestaurantCards";
// import SwipeButtons from "../SwipeButtons/SwipeButtons";
import Favorites from "../Favorites/Favorites";
import RestaurantScreen from "../RestaurantScreen/RestaurantScreen";
import LandingPage from "../LandingPage/LandingPage";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={"/"} component={RestaurantCards} />

            <Route exact path={"/favorites"} component={Favorites} />

            <Route
              path={"/favorites/:restaurant_id"}
              component={RestaurantScreen}
            />

            <Route path={"/aboutme"} component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
