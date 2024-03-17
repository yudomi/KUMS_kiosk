import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Printer from './Printer';
import Table from './Table';
import Space from './Space';
import Rent from './Rent';
import Survey from './Survey';
import NotFound from './NotFound';

function App() {
  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/printer' element={<Printer/>}></Route>
          <Route path='/space' element={<Space/>}></Route>
          
          <Route path='/table' element={<Table/>}></Route>
          <Route path='/rent' element={<Rent/>}></Route>
          <Route path='/survey' element={<Survey/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}
 
export default App;
