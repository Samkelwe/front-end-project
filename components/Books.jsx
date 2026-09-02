import "./Books.css"
function Book({book}) {

  function onFavClick(){
    alert ("clicked")
  }
   return <div className="book">
      <div className = "book-poster">
        <img className = "images" src = {book.url} alt = {book.title}/>
        <div className = "book-overlay"> 
          <button className = "favorite-btn" onClick = {onFavClick} > ♡ </button> 
        </div>
      </div>
      <div className = "book-info"> 
         <h3> {book.title}</h3>
         <p> Author : {book.author}</p>
      </div> 
    </div>
  
}

export default Book