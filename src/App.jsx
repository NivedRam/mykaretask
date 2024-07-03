import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./SignIn";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import PublicRoute from "./authGaurd/publicRoute";
import PrivateRoute from "./authGaurd/privetRoute";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Helmet>
              <title>Login</title>
            </Helmet>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PublicRoute>
            <Helmet>
              <title>Sign Up</title>
            </Helmet>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/landing"
        element={
          <PrivateRoute>
            <Helmet>
              <title>Dashboard</title>
            </Helmet>
            <LandingPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

function App() {
  const preUser = {
    firstName: "Admin",
    lastName: "User",
    username: "admin",
    password: "admin",
    role: "admin",
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === preUser.username);

    if (!userExists) {
      users.push(preUser);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
