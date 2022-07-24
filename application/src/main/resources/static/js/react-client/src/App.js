import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <AppRouter />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
