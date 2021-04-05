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
              Always trying to figure out what to eat? We are here to help!{" "}
              <br />
              <br />
              Swipe left if you don't like the restaurant we recommand you.
              <br />
              <br />
              Swipe right if you like the restaurant we recommand you, and you
              can check out detail infomation of the restaurant in the
              "favorite" folder.
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
