import React from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);
  function expandNav() {
    setExpanded(oldVal => !oldVal);
  }
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);
  return (
    <div>
      <div className={"sideNav " + (expanded ? "sideNav-expanded" : "sideNav-normal")}>
        <div onClick={expandNav}>
          <Link to="#">
            <i className="sideNav--icon fas fa-bars"></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/books" ? "sideNav--current" : ""}>
          <Link to="/collections">
            <span className="sideNav--text">Books</span><i className="sideNav--icon fas fa-book"></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/add" ? "sideNav--current" : ""}>
          <Link to="/add">
            <span className="sideNav--text">Create</span><i className="sideNav--icon fas fa-folder-plus"></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/edit" ? "sideNav--current" : ""}>
          <Link to="/edit">
            <span className="sideNav--text">Edit</span><i className="sideNav--icon fas fa-pen-to-square"></i>
          </Link>
        </div>
        <div className={currentLocation.pathname === "/about" ? "sideNav--current" : ""} style={{marginTop: 'auto', marginBottom: '10px'}}>
          <Link to="/about">
            <span className="sideNav--text">Account</span><i className="sideNav--icon fas fa-user"></i>
          </Link>
        </div>
      </div>
      <div className="topNav">
        <Link to="/">
          <i className="fas fa-book-open"></i>
          <span className="topNav--text"> Books</span>
        </Link>
      </div>
    </div>
  )
}
