import React from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsandConditions from "./pages/TermsandConditions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        <Route path="/tac" element={<TermsandConditions/>}/>
      </Routes>
    </div>
  );
}

export default App;
