import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "../actions/favoriteActions.js";
import { favorites } from "./../data.js";

const initialState = {
  favorites: favorites,
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const addFavorite = {
        ...action.payload,
        id: action.payload.id,
      };
      return { ...state, favorites: [...state.favorites, addFavorite] };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    default:
      return state;
  }
};

export default reducer;
