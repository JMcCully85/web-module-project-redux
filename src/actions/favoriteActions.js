export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};
