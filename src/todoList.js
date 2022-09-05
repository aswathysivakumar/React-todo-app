import { Button } from 'react-bootstrap';

export default (function todoList({ todo, index, completeTodo, removeTodo, redoTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.description}</span>
      <div>
       { !todo.isCompleted && <Button variant="outline-success" onClick={() => completeTodo(index)}>✓</Button> }
       { todo.isCompleted  &&  (<Button variant="outline-secondary" onClick={() => redoTodo(index)}>Undo</Button>) }
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
});
