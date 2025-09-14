import React from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
