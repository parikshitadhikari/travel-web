import React from "react";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  </Router>
  </>
  )
}
