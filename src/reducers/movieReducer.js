import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import { movies } from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const newMovie = {
        ...action.payload,
        id: state.movies.reduce(
          (accumulator, currentValue) =>
            Math.max(accumulator, currentValue.id) + 1,
          0
        ),
      };
      return { ...state, movies: [...state.movies, newMovie] };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
