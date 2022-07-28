import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';
import Footer from './components/footer';
import Header from './components/header';

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
