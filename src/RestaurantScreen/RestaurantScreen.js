import React, { Component } from "react";
import "./RestaurantScreen.css";
//import Avatar from "@material-ui/core/Avatar";
import Header from "../Header/Header";

class RestaurantScreen extends Component {
  state = {};
  render() {
    console.log("restaurantScreen");
    //const { restaurant_id } = this.props;
    return (
      <>
        <Header backButton="/favorites" />
        <div className="chatScreen">
          <p className="chatScreen__timestamp">SAVED ON 03/21/2020</p>
        </div>
      </>
    );
  }
}

export default RestaurantScreen;
