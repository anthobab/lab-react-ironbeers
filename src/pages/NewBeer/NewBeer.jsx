import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewBeer.css";

const NewBeer = () => {
  // axios.post()
  const [body, setBody] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const navigate = useNavigate();

  useEffect(() => {}, [body]);

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((res) => {
        if (Math.floor(res.status / 100) === 2) {
          //response = 2XX
          console.log(); // navigate('/beer')
        }
        console.log(res);
        setBody({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="NewBeer" onSubmit={handleClick}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, name: event.target.value };
          })
        }
        value={body.name}
      />
      <label htmlFor="tagline">Tagline</label>
      <input
        type="text"
        name="tagline"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, tagline: event.target.value };
          })
        }
        value={body.tagline}
      />
      <label htmlFor="description">Description</label>
      <textarea
        // type="textarea"
        name="description"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, description: event.target.value };
          })
        }
        value={body.description}
      />
      <label htmlFor="first_brewed">First Brewed</label>
      <input
        type="text"
        name="first_brewed"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, first_brewed: event.target.value };
          })
        }
        value={body.first_brewed}
      />
      <label htmlFor="brewers_tips">Brewers Tips</label>
      <input
        type="text"
        name="brewers_tips"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, brewers_tips: event.target.value };
          })
        }
        value={body.brewers_tips}
      />
      <label htmlFor="attenuation_level">Attenuation level</label>
      <input
        type="number"
        name="attenuation_level"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, attenuation_level: event.target.value };
          })
        }
        value={body.attenuation_level}
      />
      <label htmlFor="contributed_by">Contributed by</label>
      <input
        type="text"
        name="contributed_by"
        onChange={(event) =>
          setBody((currentState) => {
            return { ...currentState, contributed_by: event.target.value };
          })
        }
        value={body.contributed_by}
      />

      <button type="submit">Add a New Beer</button>
    </form>
  );
};

export default NewBeer;
