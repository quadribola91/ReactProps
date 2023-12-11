import React from "react";
import Player from "./Player";
import playersData from "./players";

const PlayersList = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
