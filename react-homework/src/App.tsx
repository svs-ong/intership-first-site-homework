import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { HeroSection } from './components/HeroSection';
import { HomePageFunction } from './pages/Home/HomePage';
import { LogoPageFunction } from './pages/Logo/LogoPage';
import { ContactPageFunction } from './pages/Contact/ContactPage';
import { Footer } from './components/Footer';
import { FeaturedArticles } from './components/FeaturedArticles';
import { SearchPage } from './pages/Search/SearchPage';
import './styles/App.styles.css';

const ShowFeaturedArticles: React.FC = () => {
  const location = useLocation();  //uselocation function
  if (location.pathname === '/' || location.pathname === '/home')  // shows the Featured Articles only if its on the home page
    return <FeaturedArticles date={``}></FeaturedArticles>
  else
    return null;  //else not needed but just in case
}

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <><Router>
        <Nav />
        <HeroSection />
        <div className='content'>
          <Routes>
            <Route path="/logo" element={<LogoPageFunction />} />
            <Route path="/contact" element={<ContactPageFunction />} />
            <Route path="/home" element={<HomePageFunction />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<HomePageFunction />} /> {/* Default route to Home */}
          </Routes>
          <ShowFeaturedArticles />
        </div>
        <Footer />
      </Router>
      </>

    </div>
  );
};

export default App;
