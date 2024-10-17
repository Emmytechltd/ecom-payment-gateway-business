// src/App.js
import React from 'react';
import Header from './components/Header';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Products />
      </main>
    </div>
  );
};

export default App;
