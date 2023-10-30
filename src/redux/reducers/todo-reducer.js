import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => [...state, action.payload],
        deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
        toggleTodo: (state, action) => state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo),
        editTodo: (state, action) => state.map(todo => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo)
    }
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoReducer.actions;
export default todoReducer.reducer;
