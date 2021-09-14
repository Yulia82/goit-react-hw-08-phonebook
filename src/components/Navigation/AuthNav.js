import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.Navigation}>
      <li key="login" className={styles.Item}>
        <NavLink
          to="/login"
          className={styles.NavLink}
          activeClassName={styles["NavLink-active"]}
        >
          Login
        </NavLink>
      </li>

      <li key="register" className={styles.Item}>
        <NavLink
          to="/register"
          className={styles.NavLink}
          activeClassName={styles["NavLink-active"]}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
}
