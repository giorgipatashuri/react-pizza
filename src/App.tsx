import Header from './components/Header';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import React, { useState } from 'react';
import { createContext } from 'react';

interface IsearchContext {
  searchValue: string;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const searchContext = createContext<IsearchContext>({
  searchValue: '123',
});

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className='App'>
        <div className='wrapper'>
          <Header />
          <div className='content'>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </searchContext.Provider>
  );
}

export default App;
