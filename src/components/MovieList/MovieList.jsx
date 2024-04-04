import { Link, useLocation } from "react-router-dom"

const MovieList = ({movie}) => {
    const location = useLocation();
return (
    <ul>
{movie.map(item => (
    <Link
      key={item.id}
      to={`/movies/${item.id}`}
      state={{ from: location }}
    >
      <li>{item.title}</li>
    </Link>
  ))}
  </ul>
  );
};
export default MovieList;