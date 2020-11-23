import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import { Provider } from './components/Context';

function App() {
  return (
    <Provider>
      <div className="app-container">
        <Header />
        <AddTodos />
        <Todos />
      </div>
    </Provider>
  );
}


export default App;
