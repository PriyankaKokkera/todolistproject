import React, { useState } from "react";
import TodoItem from "./to/TodoItem";
import TodoForm from "./to/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

 
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  
  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setEditingTodo(null); 
  };

 
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm
        onSubmit={editingTodo ? (text) => updateTodo(editingTodo.id, text) : addTodo}
        editingTodo={editingTodo}
      />
      <div>
        <h2>Tasks</h2>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              setEditingTodo={setEditingTodo}
            />
          ))
        ) : (
          <p>No tasks to display</p>
        )}
      </div>
    </div>
  );
};

export default App;
