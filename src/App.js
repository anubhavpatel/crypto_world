import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Coin from './Components/Coin';
import CoinDetailes from './Components/CoinDetailes';
import Exchanges from './Components/Exchanges';

import Footer from './Components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coin/>}/>
      <Route path='/coins/:id' element={<CoinDetailes/>}/>
      <Route path='/exchanges' element={<Exchanges/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
   <Footer/>
   </Router>
  );
}

export default App;
