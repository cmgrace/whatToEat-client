import React, { Component } from "react";
import "./LandingPage.css";
import Header from "../Header/Header";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header backButton="/" />
        <div className="aboutme">
          <div className="aboutme__container">
            <h1>Welcome!</h1>

            <p>
              "What to eat" recommands users a list of local restaurants. Users
              can save restaurants base on their preference.
              <br />
              <br />
              Swipe left if you don't like the restaurant we recommand.
              <br />
              <br />
              Swipe right if you like the restaurant we recommand, and you can
              check out detail infomation of the restaurant in the "favorite"
              folder.
            </p>
            <p>
              Now let's start exploring the amazing local restaurant. Thank you!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
