import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Opps, sorry</h1>
      <Link className={css.found} to="/">
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
