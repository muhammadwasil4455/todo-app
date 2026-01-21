let todo = document.getElementById("todo");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let delAllBtn = document.getElementById("delAllBtn");

function mainTodo() {
    if (todo.value.trim() === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <input type="text" value="${todo.value}" disabled />
        <button class="delbtn" onclick="delTodo(event)">Delete</button>
        <button class="editbtn" onclick="editTodo(event)">Edit</button>
    `;

    list.appendChild(li);
    todo.value = "";
}

btn.addEventListener("click", mainTodo);

function addTodoEnter(event) {
    if (event.key === "Enter") {
        mainTodo();
    }
}

function delTodo(event) {
    event.target.parentNode.remove();
}

function editTodo(event) {
    let input = event.target.parentNode.children[0];
    input.disabled = false;
    input.focus();
    event.target.innerText = "Update";
    event.target.setAttribute("onclick", "updateTodo(event)");
}

function updateTodo(event) {
    let input = event.target.parentNode.children[0];
    input.disabled = true;
    event.target.innerText = "Edit";
    event.target.setAttribute("onclick", "editTodo(event)");
}

delAllBtn.addEventListener("click", () => {
    list.innerHTML = "";
});
