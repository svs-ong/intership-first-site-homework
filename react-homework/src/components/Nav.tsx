

import React, { useState } from 'react';
import { 
  Link, 
  useNavigate 
} from 'react-router-dom';
import '../styles/Nav.styles.css';

export const Nav: React.FC = () => {

    const [searchQuery,setSearchQuery] =useState<string>('');
    const navigate=useNavigate();

    const handleSearchSubmit= (event: React.FormEvent)=>
    {
        event.preventDefault(); //cancel event if needed
        if(searchQuery.trim())
        {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);  
        }
    }
  return (
    <div className="Nav-Bar">
      <nav>
        <ul>
          <li>
            <Link to="/logo" className="NavItem1">Logo</Link>
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
                  value={searchQuery} 
                  onChange={(element)=>setSearchQuery(element.target.value)}
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
