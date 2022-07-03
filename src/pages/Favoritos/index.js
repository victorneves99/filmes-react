import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");

    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluir(id) {
    let filtroFilme = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilme);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilme));
    toast.success("Filme removido com sucesso");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span>Voce não possui filmes salvos ! : (</span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <button onClick={() => excluir(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
