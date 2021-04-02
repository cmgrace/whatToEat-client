import React, { Component } from "react";
import "./RestaurantScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Header from "../Header/Header";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import IconButton from "@material-ui/core/IconButton";
import Context from "../Context/Context";

class RestaurantScreen extends Component {
  static contextType = Context;

  state = { error: null };

  renderPage(dish) {
    return (
      <>
        <Avatar
          variant="square"
          className="chat__image"
          style={{ height: "80px", width: "80px" }}
          src={dish.dish_img}
        />
        <div className="chat__details">
          <h2>{dish.dish_name}</h2>
          <p>${dish.dish_price}</p>

          <p>{dish.dish_desc}</p>
        </div>
        <div className="chat__timestamp">
          <IconButton onClick={this.handleDeleteClick}>
            <AddCircleOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
      </>
    );
  }
  getDishesForRestaurant = (dishes = [], restaurantId) =>
    !restaurantId
      ? dishes
      : dishes.filter((dish) => dish.restaurant_id === restaurantId);

  findRestaurant = (restaurantList = [], restaurantId) =>
    restaurantList.find((restaurant) => restaurant.id === restaurantId);

  render() {
    //console.log("params:", this.props.match.params);
    const { dishes = [], restaurantList = [] } = this.context;

    const { restaurant_id } = this.props.match.params;
    const getDishesForRestaurant = this.getDishesForRestaurant(
      dishes,
      Number(restaurant_id)
    );
    const theRestaurant = this.findRestaurant(
      restaurantList,
      Number(restaurant_id)
    );

    return (
      <>
        <Header backButton="/favorites" />
        <div className="chatScreen">
          <Avatar
            variant="square"
            className="chatScreen__image"
            style={{ height: "300px", width: "350px" }}
            src={theRestaurant.image_url}
          />

          <div className="chatScreen__details">
            <h2>{theRestaurant.name}</h2>
            <p>Price: {theRestaurant.price}</p>
            <p>Cusine: {theRestaurant.categories}</p>
            <p>Rating: {theRestaurant.rating}🌟</p>
            <p>{theRestaurant.review_count} reviews</p>
            <p>{theRestaurant.location}</p>
            <a href={theRestaurant.url}>
              <span className="icon">{theRestaurant.name}.com</span>
              <TouchAppOutlinedIcon />
            </a>
          </div>
        </div>

        {getDishesForRestaurant.map((dish, i) => (
          <div className="chat1" key={i}>
            {this.renderPage(dish)}
          </div>
        ))}
      </>
    );
  }
}

export default RestaurantScreen;
