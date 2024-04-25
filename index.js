const button = document.querySelector("#추가버튼");
const input = document.querySelector("#입력창");
const todos = document.querySelector("#할일들");
const reset = document.querySelector("#초기화");
const newTodos = [];

button.addEventListener("click", () => {
  const value = input.value;

  const newTodo = document.createElement("p");
  newTodos.push(newTodo);

  newTodo.innerText = value;

  todos.appendChild(newTodo);

  input.value = "";

  newTodo.addEventListener("click", () => {
    if (newTodo.className !== "done") {
      newTodo.className = "done";
    } else {
      newTodo.className = "";
    }
  });
});

reset.addEventListener("click", () => {
  newTodos.forEach((newTodo) => {
    todos.removeChild(newTodo);
  });
});
