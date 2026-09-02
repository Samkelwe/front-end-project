
import Books from "../components/Books"
import "./App.css"
import { useState } from "react"
import Uzalo from '../components/Uzalo.jpg';
import The4OfUs from '../components/the4ofus.jpg';
import Skeem from '../components/Skeem.jpg';





function App() {

  const [searchQuery, setSearchQuery] = useState("")

  const books = [
    {title : "The Four Of Us", author : "Kamogelo", url : The4OfUs},
    {title : "Uzalo", author : "Mpho", url : Uzalo },
    {title : "Skeem Saam", author : "Nyiko", url : Skeem}
    
  ];

  const handleSearch = (e) => {
    e.prevetDefault();
    setSearchQuery("");

  }
  return(
<>
  <form onSubmit = {handleSearch} className = "search-form">

     <input type = "text" 
     placeholder= "Search for a book..." 
     className = "search-input" 
     value = {searchQuery}
     onChange = { (e) => setSearchQuery(e.target.value)}
     />
     <button type = "Submit" className="search-button">Search</button>
      
    </form>

 

<div className= "books-grid">
  {books.map((book) =>  
  book.title.toLowerCase().startsWith(searchQuery) &&
        (<Books book= {book} key = {book.id} />)
   )
  }
</div>
</>
  
  )
    
}

export default App;

