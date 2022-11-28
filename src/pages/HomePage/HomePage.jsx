import React from "react";
import { Link } from "react-router-dom";
import allBeersImage from "./../../assets/beers.png";
import randomBeerImage from "./../../assets/random-beer.png";
import newBeerImage from "./../../assets/new-beer.png";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Link to="beers">
        <picture>
          <img src={allBeersImage} alt="All beers" />
        </picture>

        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
          sit ipsam, rem mollitia impedit beatae alias dolor molestiae
          temporibus, quae at debitis ullam voluptatem ratione, delectus magnam
          incidunt. Perferendis?
        </p>
      </Link>
      <Link to="random-beer">
        <picture>
          <img src={randomBeerImage} alt="Random beer" />
        </picture>

        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
          sit ipsam, rem mollitia impedit beatae alias dolor molestiae
          temporibus, quae at debitis ullam voluptatem ratione, delectus magnam
          incidunt. Perferendis?
        </p>
      </Link>
      <Link to="new-beer">
        <picture>
          <img src={newBeerImage} alt="New beer" />
        </picture>

        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
          sit ipsam, rem mollitia impedit beatae alias dolor molestiae
          temporibus, quae at debitis ullam voluptatem ratione, delectus magnam
          incidunt. Perferendis?
        </p>
      </Link>
    </div>
  );
};

export default HomePage;
