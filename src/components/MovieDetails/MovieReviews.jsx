import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../fetchAPI';
import Loader from '../Loader';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDataReviews = async () => {
      try {
        const data = await fetchReviews(movieId);
        if (data && data.results) {
          setReviews(data.results);
        } else {
          setReviews([]);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDataReviews();
  }, [movieId]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Movie reviews</h3>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li className={css.card} key={review.id}>
              <p className={css.author}>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
// fetchReviews
// {movie && (
//     <ul>
//       {movie.map(movieItem => (
