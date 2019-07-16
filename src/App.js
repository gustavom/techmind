import React from 'react';
import 'normalize.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TechList from './components/TechList/TechList';

function App(){
  return (
    <>
    <Header />
    <main>
      <div className="slogan">
        <h2>Your knowledge in one place</h2>
      </div>
      <TechList/>
    </main>
    <Footer />
    </>
  )
}

export default App;