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

function completeTodos(event) {
    const li = event.target.parentElement
    const idx = todos.findIndex((toDo) => toDo.id === parseInt(li.id, 10))
    todos[idx].complete = !todos[idx].complete
    li.classList.toggle("complete")
    console.log(todos[idx])
    saveTodo()
}

function paintTodo(todoNewObj) {
    const li = document.createElement("li")
    li.id = todoNewObj.id

    const cplButton = document.createElement("button")
    cplButton.innerText = "⚪️"
    li.appendChild(cplButton)

    const span = document.createElement("span")
    span.innerText = todoNewObj.text
    li.appendChild(span)

    const delButton = document.createElement("button")
    delButton.innerText = "❌"
    li.appendChild(delButton)

    todoList.appendChild(li)

    if (todoNewObj.complete === true) {
        li.classList.toggle("complete")
    }

    cplButton.addEventListener("click", completeTodos)
    delButton.addEventListener("click", deleteTodos)
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const todoNew = todoInput.value
    todoInput.value = ""
    const todoNewObj = {
        id: Date.now(),
        text: todoNew,
        complete: false,
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
