import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Link to={"/"} className="logo">
        React Flix
      </Link>
      <Link to={"/favoritos"} className="favoritos">
        Meus Filmes
      </Link>
    </header>
  );
}
