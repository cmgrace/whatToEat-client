import { API_ENDPOINT } from "../config";

const RestaurantApiService = {
  getRestaurants() {
    return fetch(`${API_ENDPOINT}/restaurants`, {
      headers: { "content-type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postRestaurantToFavorites(item) {
    return fetch(`${API_ENDPOINT}/favorites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getRestaurantsInFavorites() {
    return fetch(`${API_ENDPOINT}/favorites/items`, {
      headers: { "content-type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteItemInFavorites(fav_id) {
    return fetch(`${API_ENDPOINT}/favorites/items/${fav_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default RestaurantApiService;
