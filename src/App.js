import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import TodoForm from './components/todoForm';

function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    <TodoForm />
    </div>
  );
}

export default App;
