import React from "react";

// Get the date and format it correctly for best of year button
const date = new Date();
let year = date.getFullYear();
let month = ("0" + (date.getMonth() + 1)).slice(-2);
let day = ("0" + date.getDate()).slice(-2);
let today = `${year}-${month}-${day}`;

function AllGamesView(props) {
  return (
    <div>
      <button onClick={props.navigatePages(-2)}>Previous Page</button>
      <button onClick={props.navigatePages(-1)}>Next Page</button>

      <button
        onClick={props.handleFilter({
          page: 1,
          ordering: "",
          dates: "",
        })}
        value="trending"
      >
        Trending
      </button>
      <button
        onClick={props.handleFilter({ page: 1, genres: "action" })}
        value="action"
      >
        Action
      </button>
      <button
        onClick={props.handleFilter({
          page: 1,
          genres: "role-playing-games-rpg",
        })}
        value="role-playing-games-rpg"
      >
        RPG
      </button>
      <button
        onClick={props.handleFilter({ page: 1, genres: "strategy" })}
        value="strategy"
      >
        Strategy
      </button>
      <button
        onClick={props.handleFilter({ page: 1, genres: "shooter" })}
        value="shooter"
      >
        Shooter
      </button>
      <button
        onClick={props.handleFilter({ page: 1, genres: "racing" })}
        value="racing"
      >
        Racing
      </button>
      <button
        onClick={props.handleFilter({ page: 1, genres: "adventure" })}
        value="adventure"
      >
        Adventure
      </button>
      <button
        onClick={props.handleFilter({ page: 1, genres: "puzzle" })}
        value="puzzle"
      >
        Puzzle
      </button>
      <button
        onClick={props.handleFilter({
          ordering: "-added",
          dates: `${year}-01-01,${today}`,
        })}
        value="Best of Year"
      >
        Best of {year}
      </button>
      <button
        onClick={props.handleFilter({
          ordering: "-rating",
        })}
        value="Top Rated"
      >
        Top Rated
      </button>

      {props.games.length > 0 && !props.isLoading ? (
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
