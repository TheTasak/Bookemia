import React from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);
  function expandNav() {
    setExpanded(oldVal => !oldVal);
  }
  const currentLocation = useLocation();
  return (
    <React.Fragment>
      <div className={styles.sideNav + " " + (expanded ? styles["sideNav-expanded"] : styles["sideNav-normal"])}>
        <div onClick={expandNav}>
          <Link to="#">
            <i className={styles["sideNav--icon"] + " fas fa-bars"}></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/collections" ? styles["sideNav--current"] : ""}>
          <Link to="/collections">
            <span className={styles["sideNav--text"]}>Books</span>
            <i className={styles["sideNav--icon"] + " fas fa-book"}></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/add" ? styles["sideNav--current"] : ""}>
          <Link to="/add">
            <span className={styles["sideNav--text"]}>Create</span>
            <i className={styles["sideNav--icon"] + " fas fa-folder-plus"}></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/edit" ? styles["sideNav--current"] : ""}>
          <Link to="/edit">
            <span className={styles["sideNav--text"]}>Edit</span>
            <i className={styles["sideNav--icon"] + " fas fa-pen-to-square"}></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/about" ? styles["sideNav--current"] : ""} style={{marginTop: 'auto', marginBottom: '10px'}}>
          <Link to="/about">
            <span className={styles["sideNav--text"]}>Account</span>
            <i className={styles["sideNav--icon"] + " fas fa-user"}></i>
          </Link>
        </div>
      </div>
      <div className={styles.topNav}>
        <Link to="/">
          <i className="fas fa-book-open"></i>
          <span className={styles["topNav--text"]}> Bookemia</span>
        </Link>
      </div>
    </React.Fragment>
  )
}
