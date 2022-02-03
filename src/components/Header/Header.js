import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-screen p-4 bg-slate-300">
      <nav className="flex justify-between p-4">
        <Link to="/">My Task</Link>
        <ul className="flex ">
          <li>
            <Link to="/login" className="mr-4 btn-primary">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="btn-secondary">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
