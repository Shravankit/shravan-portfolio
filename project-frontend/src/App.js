import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './HeaderAndFooter/Footer';
import Header from './HeaderAndFooter/Header';
import Home from './MainPages/Home';
import ContactPage from './AdditionalPages/ContactPage';
import AboutPage from './AdditionalPages/AboutPage';
import PortfolioPage from './AdditionalPages/PortfolioPage';
import ScrollToTop from './ScrollToTop';
import Dashboard from './Dashboar';
// import { useEffect } from 'react';

function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
