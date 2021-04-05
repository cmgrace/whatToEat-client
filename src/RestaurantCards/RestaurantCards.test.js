import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import RestaurantCards from "./RestaurantCards";

describe("Smoke test", () => {
  it("RestaurantCards component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <RestaurantCards />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
