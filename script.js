document.getElementById("add-todo").addEventListener("click", function () {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        createTodo(todoText);
        todoInput.value = "";
    }
});

function createTodo(text) {
    const todoGet = document.getElementById("todo-get");

    // Create list item
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    // Set todo text
    li.textContent = text;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("btn", "btn-sm");

    // Add event listener to remove button
    removeBtn.addEventListener("click", function () {
        todoGet.removeChild(li);
    });

    // Append button to list item
    li.appendChild(removeBtn);

    // Append list item to todo list
    todoGet.appendChild(li);
}
