import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello TO-DO</h1>
        
        <hr />

        <TodoList />
      </header>
    </div>
  );
}

export default App;
