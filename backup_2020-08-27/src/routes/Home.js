import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => { 
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');

    console.log(movies);

    this.setState({ movies, isLoading: false });
  };

  componentDidMount(){
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : 
        (
          <div className="movies">
            {movies.map(item => {
              const {id, title, year, summary, genres} = item;
              const poster = item.medium_cover_image;

              return (
                <Movie 
                  title={title} 
                  key={id} 
                  year={year} 
                  summary={summary} 
                  poster={poster} 
                  genres={genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  };
};

export default Home;