import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "../../components/BeerCard/BeerCard";

const BeerList = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(data);
        // console.log(data);
      })
      .catch((error) => console.error(error));
    // return () => {
    // //   Cleanup fcn
    // };
  }, []); // initial only

  if (!beers) {
    return <div className="Loading">Beer List Loading ...</div>;
  } else {
    return (
      <div className="BeerList">
        {/* {console.log(beers)} */}
        {beers.map((beer) => (
          <BeerCard key={beer._id} beer={beer}></BeerCard>
        ))}
      </div>
    );
  }
};

export default BeerList;
