const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")
const todos = []

function handleButtonClick(event) {
    const targetedTodo = event.target.parentElement
    targetedTodo.remove()
}

function paintTodo(todoNew) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    const button = document.createElement("button")
    li.appendChild(button)
    span.innerText = todoNew
    button.innerText = "✖️"
    todoList.appendChild(li)
    button.addEventListener("click", handleButtonClick)
}

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const todoNew = todoInput.value
    todoInput.value = ""
    paintTodo(todoNew)
    todos.push(todoNew)
    saveTodo(todoNew)
}

todoForm.addEventListener("submit", handleTodoSubmit)
const savedTodos = localStorage.getItem("todos")

if (savedTodos != null) {
    const parsedTodos = JSON.parse(savedTodos)
    parsedTodos.forEach(paintTodo)
}
