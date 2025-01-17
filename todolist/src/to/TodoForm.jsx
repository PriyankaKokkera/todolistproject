import React, { useState, useEffect } from "react";

const TodoForm = ({ onSubmit, editingTodo }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "5px", marginRight: "10px", width: "300px" }}
      />
      <button type="submit">{editingTodo ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
