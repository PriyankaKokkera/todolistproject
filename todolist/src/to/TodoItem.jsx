import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo, setEditingTodo }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 10px",
        border: "1px solid #ccc",
        marginBottom: "5px",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginLeft: "10px",
          }}
        >
          {todo.text}
        </span>
      </div>
      <div>
        <button onClick={() => setEditingTodo(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
