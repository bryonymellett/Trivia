import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import LearnPage from './LearnPage.tsx';
import Home from './Home.tsx';
import TestPage from './TestPage.tsx';
import CapitalsPage from './CapitalsPage.tsx';


export interface Country {
  name: string,
  capital: string,
  region: string,
}

const App: React.FC = (props) => {

  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
      const fetchCountryData = async() => {
      try {
          const res = await axios.get<Country[]>('http://localhost:5000/api/countries')
          setCountryData(res.data)

      } catch (error) {
          console.log('home', error)
      }
  };

      fetchCountryData();

  }, [])

  return (      
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/capitals" element={<CapitalsPage countryData={countryData} />} />
        </Routes>
    </Router>
     
    
  );
}

export default App;
