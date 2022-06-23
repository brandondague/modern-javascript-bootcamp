const todo = [{
    text: "Pack",
    completed: false
}, {
    text: "Walk the dog",
    completed: true
}, {
    text: "Buy groceries",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: false
}]

function removeTodo (todos, text) {
    const index = todos.findIndex((todo) => {
            return todo.text.toLowerCase() === text.toLowerCase()
        })
    if (index !== -1) {
        todos.splice(index, 1)
    }
}

function getTodo (todos) {
    return todos.filter((note) => !note.completed)
}

function sortTodo (todos) {
    todos.sort((a, b) => {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodo(todo)
console.log(todo)

// console.log(getTodo(todo))

// removeTodo(todo, "do work")
// console.log(todo)