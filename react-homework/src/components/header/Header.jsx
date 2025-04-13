function Header()
{
    return(
    <nav className="navigation max-width-1 margin-auto">
            <a href="./index.html" className="logo">Logo</a>
            <div className="nav-links">
                <a href="./index.html" className="center">Home</a>
                <a href="./contact.html" className="center">Contact</a>
            </div>
            <form action="./search.html" className="search-form">
                <input type="search" name="query" className="form-input" placeholder="Search Here"/>
                <button className="btn-blue" type="submit">Search</button>
            </form>
        </nav>
        )
}
export default Header;