import React from "react";
import { Link } from "react-router-dom";
import "./BeerCard.css";

const BeerCard = ({
  beer: { image_url, name, tagline, contributed_by, _id: id },
}) => {
  return (
    <div className="BeerCard">
      <Link to={"/beer/" + id}>
        <picture>
          <img src={image_url} alt="" />
        </picture>
        <div className="beer-info">
          <h1>{name}</h1>
          <p className="tag-line">{tagline}</p>
          <p>
            <span>Created by: </span>
            {contributed_by}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BeerCard;
