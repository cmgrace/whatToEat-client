import React, { Component } from "react";
import RestaurantApiService from "../services/restaurant-api-service";

const Context = React.createContext({
  favorites: [],
  restaurantList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setRestaurantList: () => {},
  setFavoritesList: () => {},
  UpdateFavoritesList: () => {},
  removeItemFromFavorites: () => {},
  setItemIdInOrder: () => {},
});
export default Context;

export class RestaurantProvider extends Component {
  state = {
    favorites: [],
    restaurantList: [],
    itemIdInOrder: [],
    error: null,
  };

  componentDidMount() {
    this.clearError();
    RestaurantApiService.getRestaurants()
      .then(this.setRestaurantList)
      .catch(this.setError);
    RestaurantApiService.getRestaurantsInFavorites()
      .then(this.setFavoritesList)
      .catch(this.setError);
  }

  setRestaurantList = (restaurantList) => {
    this.setState({ restaurantList });
    //console.log(this.state.restaurantList);
  };
  setFavoritesList = (favorites) => {
    this.setState({ favorites });
  };

  UpdateFavoritesList = (item) => {
    this.setState({ favorites: [...this.state.favorites, item] });
  };

  removeItemFromFavorites = (favId) => {
    this.setState({
      favorites: this.state.favorites.filter(
        (product) => product.fav_id !== favId
      ),
    });
  };

  setItemIdInOrder = (itemIdInOrder) => {
    this.setState({ itemIdInOrder });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      favorites: this.state.favorites,
      restaurantList: this.state.restaurantList,
      itemIdInOrder: this.state.itemIdInOrder,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRestaurantList: this.setRestaurantList,
      UpdateFavoritesList: this.UpdateFavoritesList,
      setFavoritesList: this.setFavoritesList,
      removeItemFromFavorites: this.removeItemFromFavorites,
      setItemIdInOrder: this.setItemIdInOrder,
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
