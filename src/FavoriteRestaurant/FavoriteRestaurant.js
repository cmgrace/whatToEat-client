import React, { Component } from "react";
import "./FavoriteRestaurant.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import RestaurantApiService from "../services/restaurant-api-service";
import Context from "../Context/Context";

class FavoriteRestaurant extends Component {
  static contextType = Context;

  handleDeleteClick = () => {
    const fav_id = this.props.fav_id;
    RestaurantApiService.deleteItemInFavorites(fav_id)
      .then((item) => {
        //console.log("item need to delete:", item[0].fav_id)
        this.context.removeItemFromFavorites(item[0].fav_id);
      })
      .catch((error) => {
        this.context.setError(error);
      });
  };

  render() {
    const { restaurant_id } = this.props;
    return (
      <>
        <div className="chat">
          <Avatar
            variant="square"
            className="chat__image"
            style={{ height: "100px", width: "100px" }}
            src={this.props.image_url}
          />
          <div className="chat__details">
            <Link to={`/favorites/${restaurant_id}`}>
              <h2>{this.props.name}</h2>
              <p>Price: {this.props.price}</p>
              <p>Cusine: {this.props.categories}</p>
              <p>{this.props.location}</p>
            </Link>
          </div>
          <div className="chat__timestamp">
            <IconButton onClick={this.handleDeleteClick}>
              <DeleteForeverSharpIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </>
    );
  }
}

export default FavoriteRestaurant;
