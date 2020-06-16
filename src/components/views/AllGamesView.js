import React from 'react';

function AllGamesView(props) {
  return (
    <div>
      {console.log('props.games', props.games)}
      {props.games.data ? (
        props.games.data.map((game) => {
          return (
            <div key={game.id}>
              <h1>{game.name}</h1>
              <img
                alt={game.name}
                src={game.background_image}
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default AllGamesView;
