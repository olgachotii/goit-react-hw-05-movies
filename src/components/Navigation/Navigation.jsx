import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={styles.navLink}
        activeClassName={styles.activNavLink}
        exact
      >
        HomePage
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.navLink}
        activeClassName={styles.activNavLink}
      >
        MoviesPage
      </NavLink>
    </nav>
  );
}

export default Navigation;
