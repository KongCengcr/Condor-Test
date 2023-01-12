import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Search from "./pages/Search.jsx";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    return children;
  };

  const LoggerRouter = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/Profile" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/Login"
          element={
            <LoggerRouter>
              <Login />
            </LoggerRouter>
          }
        />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route exact path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
