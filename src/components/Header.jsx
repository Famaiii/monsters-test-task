import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-center align-center p-40">
      <Link to="/">
        <div className="d-flex align-center flex-column">
          <h3 className="text-uppercase">Picsum</h3>
          <p className="opacity-5">Cool photo generator</p>
        </div>
      </Link>

      <Link to="/favorites">
        <img
          className="ml-40 cu-p"
          width={20}
          height={20}
          src="/img/heart.svg"
          alt="favorites"
        />
      </Link>
    </header>
  );
};

export default Header;
