"use strict"

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem("todo")

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo)) 
}

// Render application todos based on filters
const renderTodos = (todo, filters) => {
    if (filters.hideCompleted) {
        todo = todo.filter(el => !el.completed)
    }

    const filteredTodos = todo.filter(el => el.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed)

    document.querySelector("#todos").innerHTML =""

    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos))
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach(todo => {
            document.querySelector("#todos").appendChild(generateTodoDOM(todo))
        })    
    } else {
        const message = document.createElement("p")
        message.textContent = "No to-dos to show"
        message.classList.add("empty-message")
        document.querySelector("#todos").appendChild(message)
    }
}

// Remove a todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)

    if (todoIndex > -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement("label")
    const containerElement = document.createElement("div")
    const todoText = document.createElement("span")
    const checkbox = document.createElement("input")
    const button = document.createElement("button")

    // Setup completed checkbox
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    containerElement.appendChild(checkbox)
    checkbox.addEventListener("change", () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup todo text
    todoText.textContent = todo.text
    containerElement.appendChild(todoText)

    // Setup container
    todoElement.classList.add("list-item")
    containerElement.classList.add("list-item__container")
    todoElement.appendChild(containerElement)

    // Setup remove todo button
    button.textContent = "remove"
    button.classList.add("button", "button--text")
    todoElement.appendChild(button)
    button.addEventListener("click", () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const statement = document.createElement("h2")
    statement.classList.add("list-title")
    if (incompleteTodos.length === 0) {
        statement.textContent = "You have nothing to do"
    } else if (incompleteTodos.length === 1) {
        statement.textContent = `You have ${incompleteTodos.length} thing to do`
    } else {
        statement.textContent = `You have ${incompleteTodos.length} things to do`   
    }
    return statement
}