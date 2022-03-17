import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import { Dashboard as BeTheHeroDashboard } from "./components/beTheHero/dashboard";
import { Login as BeTheHeroLogin } from "./components/beTheHero/login";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<App />} />
        {/* Be the hero */}
        <Route path="/be-the-hero" element={<BeTheHeroDashboard />} />
        <Route path="/be-the-hero/login" element={<BeTheHeroLogin />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
