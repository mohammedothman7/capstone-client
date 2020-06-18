// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allUsers } from "../store/utilities/allUsers";
export { default as allGames } from "../store/utilities/allGames";
export { default as searchGames } from "../store/utilities/searchGames";
