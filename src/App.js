import React, { useState } from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewTodo from './newTodo'
import TodoList from './todoList'

function App() {
  // Initially setting the todos list
  const [todos, setNewTodos] = useState([]);

  // For adding new todo into the list
  const addTodo = description => {
    const todoList = [...todos, { description }];
    setNewTodos(todoList);
  };
  
  // For marking the todo in list as completed
  const completeTodo = index => {
    const todoList = [...todos];
    todoList[index].isCompleted = true;
    setNewTodos(todoList);
  };

  // For removing a todo from list
  const removeTodo = index => {
    const todoList = [...todos];
    todoList.splice(index, 1);
    setNewTodos(todoList);
  };

  // Redo a todo from list
  const redoTodo = index => {
    const todoList = [...todos];
    todoList[index].isCompleted = false;
    setNewTodos(todoList);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <AddNewTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <TodoList
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                redoTodo={redoTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
