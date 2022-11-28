import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BeerCardDetail.css";

const BeerCardDetail = () => {
  const { urlid } = useParams();
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + urlid)
      .then(({ data }) => {
        setBeer(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // beer: { image_url, name, tagline, contributed_by, _id: id },
  if (!beer) {
    return <div className="BeerCardDetail">Beer is loading</div>;
  } else {
    return (
      <div className="BeerCardDetail">
        <picture>
          <img id="beer-image" src={beer.image_url} alt="" />
        </picture>
        <div className="beer-info">
          <h1>{beer.name}</h1>
          <p className="tag-line">{beer.tagline}</p>

          <p>
            <span>Created by: </span>
            {beer.contributed_by}
          </p>

          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
        </div>
      </div>
    );
  }
};

export default BeerCardDetail;
