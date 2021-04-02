import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./RestaurantCards.css";
import Header from "../Header/Header";
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import Context from "../Context/Context";
import RestaurantApiService from "../services/restaurant-api-service";

class RestaurantCards extends Component {
  static contextType = Context;

  state = { error: null };

  swiped = (direction, idToDelete) => {
    this.setState({ error: null });
    const item = { restaurant_id: idToDelete };

    // if (direction === "left") console.log("removing: " + idToDelete);
    if (direction === "right") {
      RestaurantApiService.postRestaurantToFavorites(item)
        .then((restaurantId) => {
          //console.log(restaurantId);

          this.context.UpdateFavoritesList(restaurantId);
        })
        .catch((error) => {
          this.setState({ error });
          console.error({ error });
        });
      // console.log("adding: " + idToDelete);
    }
  };

  outOfFrame = (name) => {
    // console.log(name + " left the screen");
  };

  render() {
    const { restaurantList } = this.context;
    return (
      <>
        <Header />
        <div className="tinderCards">
          <div className="tinderCards__cardContainer">
            {restaurantList.map((restaurant) => (
              <TinderCard
                className="swipe"
                key={restaurant.id}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => this.swiped(dir, restaurant.id)}
                onCardLeftScreen={() => this.outOfFrame(restaurant.name)}
              >
                <div
                  style={{ backgroundImage: `url(${restaurant.image_url})` }}
                  className="card"
                >
                  <h3>{restaurant.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
        <SwipeButtons />
      </>
    );
  }
}

export default RestaurantCards;
