import React from 'react';

function TodoItemComponent({ todo, editingId, setEditingId, editingText, setEditingText, handleSave, handleToggle, handleDelete }) {
    if (editingId === todo.id) {
        return (
        <div className="todo-item">
            <input className="input-text" value={editingText} onChange={e => setEditingText(e.target.value)} />
            <button onClick={handleSave}>Save</button>
        </div>
        );
    }

    return (
        <div className="todo-item">
        <label className="checkbox-label">
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <span>{todo.title}</span>
        </label>
        <button className="edit-button" onClick={() => setEditingId(todo.id)}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TodoItemComponent;
