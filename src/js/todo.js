const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")
let todos = []

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodos(event) {
    const li = event.target.parentElement
    li.remove()
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id, 10))
    saveTodo()
}

function paintTodo(todoNewObj) {
    const li = document.createElement("li")
    li.id = todoNewObj.id
    const span = document.createElement("span")
    li.appendChild(span)
    const button = document.createElement("button")
    li.appendChild(button)
    span.innerText = todoNewObj.text
    button.innerText = "✖️"
    todoList.appendChild(li)
    button.addEventListener("click", deleteTodos)
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const todoNew = todoInput.value
    todoInput.value = ""
    const todoNewObj = {
        id: Date.now(),
        text: todoNew,
    }
    paintTodo(todoNewObj)
    todos.push(todoNewObj)
    saveTodo()
}

todoForm.addEventListener("submit", handleTodoSubmit)
const savedTodos = localStorage.getItem("todos")

if (savedTodos != null) {
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    parsedTodos.forEach(paintTodo)
}
