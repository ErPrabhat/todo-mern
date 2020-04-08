import React from 'react';
import './App.css';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {Provider} from './context'
function App() {
  return (
    <Provider>
     <div className="col-md-6 offset-3">
     <Header></Header>
    
     <AddTodo></AddTodo>
     <Todos></Todos>
     </div>
    
    </Provider>
  );
}

export default App;
