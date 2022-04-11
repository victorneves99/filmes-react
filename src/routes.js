import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Erro from "./pages/Erro";

export default function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />

          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
