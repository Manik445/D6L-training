import React, { useState } from 'react';
import { Button } from '@mui/material';

const Taskk1 = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, msg: "Task 1 for todo" },
    { id: 2, msg: "Task 2 for todo" }
  ]);
  const [updateText, setUpdateText] = useState('');

  const handleSavetodo = () => {
    if (text.trim() !== '') {
      const newTodo = { id: todos.length + 1, msg: text };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, msg: updateText } : todo
    );
    setTodos(updatedTodos);
    setUpdateText('');
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <div key={todo.id}>
            <li>
                {todo.msg}
              <input
                type="text"
                value={todo.id === todos.length + 1 ? text : updateText}
                onChange={(e) => {
                  if (todo.id === todos.length + 1) {
                    setText(e.target.value);
                  } else {
                    setUpdateText(e.target.value);
                  }
                }}
              />
            </li>
            <Button onClick={() => handleUpdate(todo.id)}>Update</Button>
            <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
          </div>
        ))}
      </ul>

      <form onSubmit={(e) => { e.preventDefault(); handleSavetodo(); }}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">ADD ME</button>
      </form>
    </div>
  );
};

export default Taskk1;
