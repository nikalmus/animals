import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import { Button } from "react-bootstrap";

const Home = () => {
  const [animalList, setAnimalList] = useState([]);

  const handleClick = async () => {
    try {
      let animal = await getAnAnimal();
      setAnimalList((prevAnimalList) => [...prevAnimalList, animal]);
    } catch (error) {
      console.error("Error fetching animal:", error);
    }
  };

  async function getAnAnimal() {
    var animals = ["dolphin", "whale", "frog", "dodo"];
    var random_animal = animals[Math.floor(Math.random() * animals.length)];

    return fetch(`https://api.api-ninjas.com/v1/animals?name=${random_animal}`, {
      headers: {
        'x-api-key': "myapikey"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

  return (
    <>
      <CustomHeader heading="Animal Facts" />
      <div>
        <p style={{ fontWeight: "bold", padding: "10px" }}>
          <b>This is a page for animal facts</b>
        </p>
        <Button variant="primary" onClick={handleClick}>
          Get a random animal
        </Button>
        {animalList.map((animal, index) => (
          <h2 key={index}>{animal.name}</h2>
        ))}
      </div>
    </>
  );
};

export default Home;
