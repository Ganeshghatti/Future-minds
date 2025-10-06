import React from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import LoginModal from "./components/modals/login";
import SignupModal from "./components/modals/signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        <Route path="/tac" element={<TermsandConditions/>}/>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <LoginModal />
      <SignupModal />
    </div>
  );
}

export default App;