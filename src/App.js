import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Home from './components/Home'

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



function App() {

  const [currentPage, setCurrentPage] = useState();

  // switch statement
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className="flex-wrapper">
      <div className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <main>
        </main>
        <footer><Footer /></footer>
      </div>
    </div>
  );
}

export default App;
