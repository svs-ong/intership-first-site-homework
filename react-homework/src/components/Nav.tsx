import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Nav: React.FC = () => {
    const [searchQuery,setSearchQuery] =useState<string>('');
    const navigate=useNavigate();

    const handleSearchSubmit= (event: React.FormEvent)=>
    {
        event.preventDefault(); //cancel event if needed
        if(searchQuery.trim())  // trims it down
        {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);  //navigate to the place where you searched
        }
    }
  return (
    <div className="Nav-Bar">
      <nav>
        <ul>
          <li>
            <Link to="/logo" className="NavItem">Logo</Link>
          </li>
          <li>
            <Link to="/home" className="NavItem">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="NavItem">Contact</Link>
          </li>
          <li>
            <form onSubmit={handleSearchSubmit}>
              <div className="searchbar">
                <input
                  type="search"
                  name="query"
                  className="form-input"
                  placeholder="Search Here"
                  value={searchQuery} // what is searched
                  onChange={(element)=>setSearchQuery(element.target.value)}  //on change element calls setSearchQuery
                />
                <button className="Btn" type="submit">Search</button>
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  );
};
