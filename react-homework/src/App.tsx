
import React from 'react';
import { 
  BrowserRouter as Router,
   Route,
    Routes,
     useLocation
     } 
from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { SearchPage } from './pages/Search/SearchPage';
import { HomePageFunction } from './pages/Home/HomePage';
import { LogoPageFunction } from './pages/Logo/LogoPage';
import { FeaturedArticles } from './components/FeaturedArticles';
import { ContactPageFunction } from './pages/Contact/ContactPage';

import './styles/App.styles.css';

const ShowFeaturedArticles: React.FC = () => { 
  let isHomePage= useLocation();
  if (isHomePage.pathname=== '/' || isHomePage.pathname=== '/home ')
    return <FeaturedArticles date={''}></FeaturedArticles>
  return null;
}

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <><Router>
        <Nav />
        <div className='appContent'>
          <Routes>
            <Route path='/logo' element={<LogoPageFunction />} />
            <Route path='/contact' element={<ContactPageFunction />} />
            <Route path='/home' element={<HomePageFunction />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/' element={<HomePageFunction />} /> {/* Default route to Home */}
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


