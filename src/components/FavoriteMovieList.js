import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteFavorite, addFavorite } from "../actions/favoriteActions";

import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const favorites = props.favorites;
  const { id } = useParams();
  const { push } = useHistory();
  const handleDeleteFavorite = (id) => {
    props.deleteFavorite(id);
    push("/movies");
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  className="material-icons"
                  onClick={() => handleDeleteFavorite(movie.id)}
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favorites: state.favoriteReducer.favorites,
  };
};

export default connect(mapStateToProps, { deleteFavorite, addFavorite })(
  FavoriteMovieList
);
