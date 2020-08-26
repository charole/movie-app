import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
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

    this.setState({ movies, isLoading: false });
  };

  componentDidMount(){
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <>
        {movies.map(item => {
          const {id, title, year, summary, poster} = item;

          return (
            <Movie title={title} key={id} id={id} year={year} summary={summary} poster={poster} />
          );
        })}

        <div>{isLoading ? 'Loading...' : 'we are ready load'}</div>
      </>
    );
  };
};

export default App;