import React from 'react';
import './App.css';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { Layout } from './containers/Layout';


function App() {
  return (
    <div className="App">
      <Header/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
