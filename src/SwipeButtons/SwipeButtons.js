import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SwipeButtons.css";
// import ReplayIcon from "@material-ui/icons/Replay";
// import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

class SwipeButtons extends Component {
  state = {};
  render() {
    return (
      <div className="swipeButtons">
        {/* <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
          <CloseIcon fontSize="large" />
        </IconButton> */}
        <p>
          <strong>
            <span className="swipeButtons__aboutme">About this page: ⮕</span>
          </strong>
        </p>
        <Link to="/aboutme">
          <IconButton className="swipeButtons__star">
            <StarIcon fontSize="large" />
          </IconButton>
        </Link>
        {/* <IconButton className="swipeButtons__right">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton> */}
      </div>
    );
  }
}

export default SwipeButtons;
