import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo } from "./redux/reducers/todo-reducer";
import FilterComponent from './components/FilterComponent';
import TodoItemComponent from './components/TodoItemComponent';
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAdd = () => {
    if (input) {
      dispatch(addTodo({
        id: Date.now(),
        title: input,
        completed: false
      }));
      setInput("");
    }
  };

  const filteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const handleSave = () => {
    dispatch(editTodo({ id: editingId, title: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="container">
      <input className="input-text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>

      <FilterComponent setFilter={setFilter} />

      {filteredTodos().map(todo => (
        <TodoItemComponent
          key={todo.id}
          todo={todo}
          editingId={editingId}
          setEditingId={setEditingId}
          editingText={editingText}
          setEditingText={setEditingText}
          handleSave={handleSave}
          handleToggle={() => dispatch(toggleTodo(todo.id))}
          handleDelete={() => dispatch(deleteTodo(todo.id))}
        />
      ))}
    </div>
  );
}

export default App;
