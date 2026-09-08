import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./pages/NavBar"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css"

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((item) => item.id === book.id);

      if (isFavorite) {
        return prev.filter((item) => item.id !== book.id);
      }

      return [...prev, book];
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Books App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link> <br/>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <br/><br/>
        </div>
    </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              onFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
