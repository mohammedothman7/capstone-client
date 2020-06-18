import React from "react";

export default function SearchGamesView(props) {
  return (
    <div>
      {console.log(props.searchGames)}
      {props.searchGames !== undefined ? (
        props.searchGames.map((game) => {
          return (
            <div key={game.id}>
              <h1>{game.name}</h1>
              <img
                alt={game.name}
                src={game.background_image}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
