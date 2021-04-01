import React, { Component } from "react";
import "./RestaurantScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Header from "../Header/Header";

class RestaurantScreen extends Component {
  state = {
    restaurant_id: "1",
    messages: [
      {
        name: "Tasty Mo:Mo",
        imgUrl:
          "https://s3-media0.fl.yelpcdn.com/bphoto/fwcKOndKjsvCOQJush9dXQ/o.jpg",
        message: "good for dinner",
      },
    ],
  };
  render() {
    console.log("restaurantScreen");
    const { restaurant_id } = this.props;
    return (
      <>
        <Header backButton="/favorites" />
        <div className="chatScreen">
          <p className="chatScreen__timestamp">
            YOU MATCHED WITH LABRADOR ON 08/21/2020
          </p>
          {/* {messages.map((message) =>
          message.name ? (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.imgUrl}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__owntext">{message.message}</p>
            </div>
          )
        )} */}
        </div>
      </>
    );
  }
}

export default RestaurantScreen;
