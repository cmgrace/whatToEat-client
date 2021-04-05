import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Egg from "./Egg.png";
import { Link, useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  const { backButton } = props;
  const handleClickGoBack = () => {
    //history.goBack();
    history.push(backButton);
  };

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => handleClickGoBack()}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        // <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
        // {/* </IconButton> */}
      )}

      <Link to="/">
        <img className="header__logo" src={Egg} alt="" />
      </Link>

      <Link to="/favorites">
        <IconButton>
          <FavoriteBorderIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
