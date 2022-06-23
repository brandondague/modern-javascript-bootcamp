"use strict"

const todos = getSavedTodos()

const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector("#search-todo").addEventListener("input", e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector("#todo-form").addEventListener("submit", e => {
    e.preventDefault()
    const text = e.target.elements.newTodo.value.trim()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
        saveTodos(todos)
        e.target.elements.newTodo.value = ""
        renderTodos(todos, filters)
    }
})

document.querySelector("#hide-completed").addEventListener("change", e => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})