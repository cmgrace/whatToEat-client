import React, { Component } from "react";
import "./RestaurantScreen.css";
import Avatar from "@material-ui/core/Avatar";

class RestaurantScreen extends Component {
  state = {};
  render() {
    return (
      <div className="chatScreen">
        {/* <p className="chatScreen__timestamp">
          YOU MATCHED WITH LABRADOR ON 08/21/2020
        </p>
        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__owntext">{message.message}</p>
            </div>
          )
        )}
        <form className="chatScreen__form">
          <input
            className="chatScreen__input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__button"
          >
            SEND
          </button>
        </form> */}
      </div>
    );
  }
}

export default RestaurantScreen;
