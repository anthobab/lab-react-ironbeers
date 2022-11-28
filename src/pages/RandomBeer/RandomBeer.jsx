import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BeerCardDetail from "../BeerCardDetail/BeerCardDetail";
import "./RandomBeer.css";

const RandomBeer = () => {
  const [id, setid] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(({ data }) => {
        setid(data._id);
      })
      .catch((err) => console.log(err));
  }, []);

  const nagigate = useNavigate();

  if (!id) {
    return (
      <div className="RandomBeer">Searching for the best random beer...</div>
    );
  } else {
    return <Navigate to={"/beer/" + id}></Navigate>;
  }
};

export default RandomBeer;
