import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import { Dashboard as BeTheHeroDashboard } from "./components/beTheHero/dashboard";
import { Login as BeTheHeroLogin } from "./components/beTheHero/login";
import { Register as BeTheHeroRegister } from "./components/beTheHero/register";
import { NewCase as BeTheHeroNewCase } from "./components/beTheHero/newCase";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route index element={<App />} />
        {/* Be the hero */}
        <Route path="/be-the-hero" element={<BeTheHeroDashboard />} />
        <Route path="/be-the-hero/login" element={<BeTheHeroLogin />} />
        <Route path="/be-the-hero/register" element={<BeTheHeroRegister />} />
        <Route path="/be-the-hero/new-case" element={<BeTheHeroNewCase />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
