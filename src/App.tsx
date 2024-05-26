import React from 'react';
import './App.css';
import Header from './components/Header.tsx';

interface AppProps{}

const App: React.FC<AppProps> = (props) => {
  return (      
    <>
      <Header />
      <div className="app">
      <div className="module-box">
        CAPITALS
      </div>
      </div>
    </>
  );
}

export default App;
