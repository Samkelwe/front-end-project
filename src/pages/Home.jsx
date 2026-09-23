import { useState } from "react";
import Books from "../../components/Books";
import "./Home.css";
import The4OfUs from "../../components/the4ofus.jpg";
import Uzalo from "../../components/Uzalo.jpg";
import Skeem from "../../components/Skeem.jpg";
import axios from "axios";
import {useLocation} from 'react-router-dom';


function Home({ favorites, onFavorite }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const books = location.state?.books || [];
 

  const handleSearch = (e) => {
    e.preventDefault();
  };

  

// 2. Add the delete function handler
const handleDeleteBook = (bookId) => {
  // Option A: Just remove it from the screen immediately (Frontend only)
  setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));

  /* Option B: If you have a working API endpoint, delete it from the backend database too:
  
  axios.delete(`https://learnapi-production-9220.up.railway.app{bookId}`)
    .then(() => {
      setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
    })
    .catch(err => console.error("Could not delete book from server", err));
  */
};

  return (
    <>

    

      <br />
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a book..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="books-grid">
        {books
          .filter((book) =>
            book.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((book) => (
            <Books
              key={book.id}
              book={book}
              onFavorite={onFavorite}
              isFavorite={favorites.some((item) => item.id === book.id)}
              onDelete={handleDeleteBook}
            />
          ))}
      </div>
    </>
  );
}

export default Home;