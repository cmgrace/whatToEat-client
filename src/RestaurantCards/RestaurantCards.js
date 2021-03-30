import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./RestaurantCards.css";

class RestaurantCards extends Component {
  state = {
    people: [
      {
        name: "Smashburger",
        imgUrl:
          "https://s3-media0.fl.yelpcdn.com/bphoto/fwcKOndKjsvCOQJush9dXQ/o.jpg",
      },
    ],
  };

  swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  render() {
    const { people } = this.state;
    return (
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => this.swiped(dir, person.name)}
              onCardLeftScreen={() => this.outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantCards;
