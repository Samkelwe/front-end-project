import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const API_URL = "https://learnapi-production-9220.up.railway.app";

function Welcome() {
  
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
  let url = `${API_URL}/api/books`;

  async function getBooks() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, {
        headers: { Accept: "application/json" },
      });
      console.log("API response:", response.data);
      setBooks(response.data);
    navigate('/Home', {state : {books: response.data}});

    } catch (err) {
      console.error("Failed to fetch books:", err);
      setError("Couldn't load books. Check the API is running.");
    } finally {
      setLoading(false);
    }
  }
  return (

    <>
    <h2>WELCOME TO YOUR FAVORITE BOOK'S APP</h2>
    <br/>
    <button onClick={getBooks} className="fetch-button" disabled={loading}>
        {loading ? "Loading..." : "Load Books"}
      </button>
      
  </>
  )

    
}

  export default Welcome;