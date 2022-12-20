const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function paintGreeting(username) {
    greeting.innerText = `${username}의 오늘 할 일`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event) {
    event.preventDefault() // 이벤트가 기본 동작을 못하도록 함
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreeting(savedUsername)
}
