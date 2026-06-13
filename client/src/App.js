import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDasboard";

import UserProtectedRoute from "./routes/UserProtectedRoutes";
import AdminProtectedRoute from "./routes/AdminProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <UserProtectedRoute>
              <Dashboard />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        

      </Routes>
    </Router>
  );
}

export default App;   