import { useState, useEffect } from 'react';
// import css from './HomePage.module.css';
import { fetchMovies } from '../../fetchAPI';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchMovies();
        setMovie(result.results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movie={movie}></MovieList>
    </div>
  );
};

export default HomePage;
