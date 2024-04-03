import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchDetails } from '../../fetchAPI';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchDetailsMovieAPI = async () => {
      try {
        setLoading(true);
        const data = await fetchDetails(movieId);
        setMovieData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailsMovieAPI();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <Link to={backLinkRef.current}>Go back</Link>
      {movieData && (
        <>
          <div className={css.imageContent}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt={movieData.title}
            />
          </div>
          <div className={css.textContent}>
            <h2 className={css.title}>{movieData.title}</h2>

            <h3>User Score:</h3>
            <p className={css.score}>{movieData.vote_average}</p>

            <h3>Overview:</h3>
            <p className={css.overview}>{movieData.overview}</p>

            <h3>Genres:</h3>
            {movieData.genres && (
              <p>{movieData.genres.map(genre => genre.name).join(', ')}</p>
            )}
          </div>
          <h3 className={css.addInfo}>Additional information</h3>
          <ul className={css.details}>
            <li>
              <Link to={`cast`} state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={`reviews`} state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
// fetchDetails
