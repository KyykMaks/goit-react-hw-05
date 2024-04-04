import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovie } from '../../fetchAPI';
import toast, { Toaster } from 'react-hot-toast';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loader from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');


  const formSearch = async searchTerm => {
    if (searchTerm.trim().length === 0) {
      toast.error('Please fill in the fields');
      return ;
    }
      try {
        setLoading(true);
        const result = await fetchMovie(searchTerm);
        setMovie(result.results);
        setSearchParams({query: searchTerm})
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div>
      <SearchForm searchQuery={searchQuery} onSetSearchQuery={formSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul>
        <MovieList movie={movie}></MovieList>
      </ul>
      <Toaster />
    </div>
  );
};
export default MoviePage;
