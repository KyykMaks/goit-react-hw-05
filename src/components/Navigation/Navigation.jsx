import { NavLink} from 'react-router-dom';
import css from './Layout.module.css';
import clsx from 'clsx';

const navClassName = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

 const Navigation = ({ children } ) => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={navClassName} to="/">
          Home
        </NavLink>
        <NavLink className={navClassName} to="/movies">
        Movie
        </NavLink>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
export default Navigation;
