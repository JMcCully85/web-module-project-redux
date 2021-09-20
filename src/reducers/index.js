import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoritesReducer";

const rootReducer = combineReducers({ movieReducer, favoriteReducer });

export default rootReducer;
