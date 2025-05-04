import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ArticlePage } from "../../pages/ArticlePage/ArticlePage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { BlogpostPage } from "../../pages/BlogpostPage/BlogpostPage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";

export const NavBar: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/article">Article Page</Link></li>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/blog">Blogpost Page</Link></li>
            <li><Link to="/contact">Contact Page</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogpostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};
