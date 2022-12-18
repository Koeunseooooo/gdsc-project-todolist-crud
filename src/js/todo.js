const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")
const todos = []

function handleButtonClick(event) {
    const targetedTodo = event.target.parentElement
    targetedTodo.remove()

    // const targetedTodoSpan = event.target.parentElement.childNodes[0].innerText // 이러면 인덱스를 무조건 0으로 고정시켜야하는데
    // console.log(targetedTodoSpan)
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

function saveTodo(todoNew) {
    todos.push(todoNew)
}
function handleTodoSubmit(event) {
    event.preventDefault()
    const todoNew = todoInput.value
    todoInput.value = ""
    paintTodo(todoNew)
    saveTodo(todoNew)
}

todoForm.addEventListener("submit", handleTodoSubmit)
