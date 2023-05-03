import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import Error from "./pages/Error.jsx";
import Apropos from "./pages/Apropos";
import GlobalStyle from "./globalstyle/globalstyle.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement/:id" element={<FicheLogement />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
