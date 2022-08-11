import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Like from "./common/like";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLiked = movie => {
    const movies = [...this.state.movies];
    const Index = movies.indexOf(movie);
    movies[Index].liked = !movies[Index].liked;
    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <h2>You Delete all movies</h2>;
    return (
      <React.Fragment>
        <h2 style={{ textAlign: "center" }}>
          There is still {count} movies in the DB.
        </h2>
        <FontAwesomeIcon icon={["far", "coffee"]} />
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Genre</th>
              <th scope='col'>Stock</th>
              <th scope='col'>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLiked(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger'>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
