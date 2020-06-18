import React from "react";

function AllGamesView(props) {
  return (
    <div>
      <button onClick={props.handleFilter({ page: -2 })}>Previous Page</button>
      <button onClick={props.handleFilter({ page: -1 })}>Next Page</button>
      <button onClick={props.handleGenre} value="action">
        Action
      </button>
      <button onClick={props.handleGenre} value="role-playing-games-rpg">
        RPG
      </button>
      <button onClick={props.handleGenre} value="strategy">
        Strategy
      </button>
      <button onClick={props.handleGenre} value="shooter">
        Shooter
      </button>
      <button onClick={props.handleGenre} value="racing">
        Racing
      </button>
      <button onClick={props.handleGenre} value="adventure">
        Adventure
      </button>

      {props.games.length > 0 ? (
        props.games.map((game) => {
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

export default AllGamesView;
