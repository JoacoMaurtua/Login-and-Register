import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
