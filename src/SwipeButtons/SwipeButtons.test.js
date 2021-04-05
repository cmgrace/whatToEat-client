import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import SwipeButtons from "./SwipeButtons";

describe("Smoke test", () => {
  it("SwipeButtons component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <SwipeButtons />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
