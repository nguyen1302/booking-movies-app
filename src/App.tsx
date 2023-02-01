import React from 'react';
import './App.css';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';


import { Routes, Route } from "react-router-dom";
import { MainPage } from './views/MainPage';
import { InforPage } from './views/InforPage';
import BookingPage from './views/BookingPage/BookingPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="infor/:id" element={<InforPage />} />
          <Route path=":id/booking" element={<BookingPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
