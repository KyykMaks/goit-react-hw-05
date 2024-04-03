import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../fetchAPI';
import Loader from '../Loader';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataCast = async () => {
      try {
        const data = await fetchCast(movieId);
        if (data && data.cast) {
          setCast(data.cast);
        } else {
          setCast([]);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataCast();
  }, [movieId]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>We don't have any cast for this movie</div>;
  return (
    <div>
      <h3>Movie cast</h3>
      <ul>
        {cast.map(actor => (
          <li className={css.card} key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />

            <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
// fetchCast
