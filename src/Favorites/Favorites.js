import React, { Component } from "react";
import "./Favorites.css";
import FavoriteRestaurant from "../FavoriteRestaurant/FavoriteRestaurant";

class Favorites extends Component {
  state = {};
  render() {
    return (
      <div className="chats">
        <FavoriteRestaurant
          name="Tasty Mo:Mo"
          message="Open11:45 AM - 10:00 PM"
          timestamp="6 mins ago"
          profilePic="https://s3-media0.fl.yelpcdn.com/bphoto/X7MFBtLU-IPYlO-DXZQAzA/o.jpg"
        />
        <FavoriteRestaurant
          name="Kane's Donuts"
          message="Closed 7:00 AM - 2:00 PM"
          timestamp="1 hr ago"
          profilePic="https://s3-media0.fl.yelpcdn.com/bphoto/PCETQIPGIHTOpPwNIYqoCg/o.jpg"
        />
        <FavoriteRestaurant
          name="Smith & Wollensky"
          message="Open 11:30 AM - 9:00 PM"
          timestamp="4 hrs ago"
          profilePic="https://s3-media0.fl.yelpcdn.com/bphoto/JXJTaO3KJXFEr8SWFSf6cA/o.jpg"
        />
      </div>
    );
  }
}

export default Favorites;
