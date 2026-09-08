function NavBar()
{
return (<nav className="navbar">
        <h1>My Books</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <br />
          <Link to="/favorites">
            Favorites ({favorites.length})
          </Link>
        </div>
      </nav>)
}

export default NavBar