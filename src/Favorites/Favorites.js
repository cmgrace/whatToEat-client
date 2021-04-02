import React, { Component } from "react";
import "./Favorites.css";
import FavoriteRestaurant from "../FavoriteRestaurant/FavoriteRestaurant";
import Header from "../Header/Header";
import Context from "../Context/Context";
import RestaurantApiService from "../services/restaurant-api-service";

class Favorites extends Component {
  static contextType = Context;

  componentDidMount() {
    RestaurantApiService.getRestaurantsInFavorites().then(
      this.context.setFavoritesList
    );
  }

  render() {
    const { favorites } = this.context;
    return (
      <>
        <Header backButton="/" />
        <div className="chats">
          {favorites.map((Restaurant, i) => (
            <FavoriteRestaurant
              key={i}
              restaurant_id={Restaurant.id}
              fav_id={Restaurant.fav_id}
              name={Restaurant.name}
              price={Restaurant.price}
              location={Restaurant.location}
              review_count={Restaurant.review_count}
              rating={Restaurant.rating}
              transactions={Restaurant.transactions}
              display_phone={Restaurant.display_phone}
              distance={Restaurant.distance}
              categories={Restaurant.categories}
              image_url={Restaurant.image_url}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Favorites;
