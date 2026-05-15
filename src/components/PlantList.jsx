// src/components/PlantList.jsx

import React from "react";
import PlantCard from "./PlantCard"; // Make sure this path and filename are exactly correct

function PlantList({ plants }) {
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
    />
  ));

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;