import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg md:w-15" src={imageUrl} alt={name} />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Team: ${team}`}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Nationality: ${nationality}`}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Jersey Number: ${jerseyNumber}`}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Age: ${age}`}</p>
      </div>
    </div>
  );
};

export default Player;
