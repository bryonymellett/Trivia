import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import LearnPage from './LearnPage.tsx';
import Home from './Home.tsx';

interface AppProps{}

const App: React.FC<AppProps> = (props) => {


  return (      
        
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnPage />} />
        </Routes>
    </Router>
     
    
  );
}

export default App;
