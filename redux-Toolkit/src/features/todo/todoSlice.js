import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
    todos: [
        {
            id: nanoid,
            text: " Hello ",
            complete: false
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.todos.map((todo) => todo.id === id)
            if (existingTodo)
                existingTodo.text = text
        },
        toggleComplete: (state, action) => {
            const { id, complete } = action.payload
            const existingTodo = state.todos.map((todo) => todo.id === id)
            if (existingTodo)
                existingTodo.complete = complete
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleComplete}=todoSlice.actions

export default todoSlice.reducer