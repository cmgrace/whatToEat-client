import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import FavoriteRestaurant from "./FavoriteRestaurant";

describe("Smoke test", () => {
  it("FavoriteRestaurant component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <FavoriteRestaurant />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
