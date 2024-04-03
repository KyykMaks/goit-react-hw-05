import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFound = () => {
  return (
    <div>
      This page not found Home page
      <Link className={css.found} to="/">
        Home page
      </Link>
    </div>
  );
};

export default NotFound;
