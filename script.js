  const input = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  addBtn.addEventListener("click", addTodo);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") addTodo();
  });

  function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");

    const left = document.createElement("div");
    left.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });

    const span = document.createElement("span");
    span.textContent = text;

    left.appendChild(checkbox);
    left.appendChild(span);

    const del = document.createElement("span");
    del.className = "delete";
    del.innerHTML = "🗑";
    del.onclick = () => li.remove();

    li.appendChild(left);
    li.appendChild(del);

    list.appendChild(li);
    input.value = "";}