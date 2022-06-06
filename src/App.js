import Header from './components/Header';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Cart from './components/Pages/Cart';
import { useState, React } from 'react';
import { createContext } from 'react';
export const searchContext = createContext();
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
                <Route exact path='/' element={<Home searchValue={searchValue} />} />
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
