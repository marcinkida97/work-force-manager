import React from 'react';
import './App.css'
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
      <div className={'wrapper bg-secondary d-flex flex-column align-items-center justify-content-center'}>
        <LoginPage />
      </div>
  );
}

export default App;