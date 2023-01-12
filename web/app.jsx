import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Search from "./pages/Search.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
