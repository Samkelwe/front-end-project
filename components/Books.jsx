import "./Books.css";

function Books({ book, onFavorite, isFavorite }) {
  return (
    <div className="book">
      <div className="book-poster">
        <img
          className="images"
          src={book.imageUrl}
          alt={book.title}
        />

        <div className="book-overlay">
          <button
            className="favorite-btn"
            onClick={() => onFavorite(book)}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>
      </div>

      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
      </div>
    </div>
  );
}

export default Books;