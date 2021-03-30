import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import RestaurantCards from "../RestaurantCards/RestaurantCards";
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import Favorites from "../Favorites/Favorites";
import RestaurantScreen from "../RestaurantScreen/RestaurantScreen";

class App extends Component {
  state = {};
  render() {
    console.log("app:", this.props.history);
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={"/"}>
              <Header />
              <RestaurantCards />
              <SwipeButtons />
            </Route>

            <Route path={"/favorites"}>
              <Header backButton="/" />
              <Favorites />
            </Route>

            <Route path="/favorites/:person">
              <Header backButton="/favorites" />
              <RestaurantScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
