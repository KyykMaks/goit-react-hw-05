import { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import { useLocation, Link } from 'react-router-dom';
import { fetchMovies } from '../../fetchAPI';

const HomePage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchMovies();
        setData(result.results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {data.map(item => (
        <Link
          key={item.id}
          to={`/movies/${item.id}`}
          state={{ from: location }}
        >
          <li>{item.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
