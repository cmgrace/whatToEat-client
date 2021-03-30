import React, { Component } from "react";
import "./FavoriteRestaurant.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

class FavoriteRestaurant extends Component {
  state = {};
  render() {
    return (
      <Link to={`/favorites/${this.props.name}`}>
        <div className="chat">
          <Avatar
            variant="square"
            className="chat__image"
            style={{ height: "100px", width: "100px" }}
            src={this.props.profilePic}
          />
          <div className="chat__details">
            <h2>{this.props.name}</h2>
            <p>{this.props.message}</p>
          </div>
          <p className="chat__timestamp">{this.props.timestamp}</p>
        </div>
      </Link>
    );
  }
}

export default FavoriteRestaurant;
