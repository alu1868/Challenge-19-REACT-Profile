import './App.css';
import React, {useState} from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Resume from './components/Resume'
import Home from './components/Home'


function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    else {
      return <Contact/>
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <div>
        <Nav currentPage={currentPage} handlepageChange={handlePageChange} />
      </div>
      <div>
        <Header></Header>
      </div>
      <main>
        {renderPage()}
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
