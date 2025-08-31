// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button class="deleteBtn">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  // Add delete functionality
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });
});

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});
