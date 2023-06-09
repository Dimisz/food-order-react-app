import React from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return(
    <>
      <Header/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;