import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectors } from "redux/auth";

export default function Navigation() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <ul className={styles.Navigation}>
      <li key="home" className={styles.Item}>
        <NavLink
          exact
          to="/"
          className={styles.NavLink}
          activeClassName={styles["NavLink-active"]}
        >
          Home
        </NavLink>
      </li>

      {isLoggedIn && (
        <li key="contacts" className={styles.Item}>
          <NavLink
            to="/contacts"
            className={styles.NavLink}
            activeClassName={styles["NavLink-active"]}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
