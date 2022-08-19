import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Joke from './components/joke';
import React from 'react';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <div>
        <AppRouter />
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
