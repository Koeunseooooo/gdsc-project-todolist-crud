const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

function paintTodo(todoNew) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    span.innerText = todoNew
    todoList.appendChild(li)
}
function handleTodoSubmit(event) {
    event.preventDefault()
    const todoNew = todoInput.value
    todoInput.value = ""
    paintTodo(todoNew)
}

todoForm.addEventListener("submit", handleTodoSubmit)
