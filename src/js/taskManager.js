import { mainContainer, taskList } from "./global.js";

const taskManager = document.querySelector(".task-manager");
const closeTaskManagerBtn = document.querySelector(".close-task-manager-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const titleInput = document.querySelector("#title");
const addTaskBtn = document.querySelector("#add-task-btn");


addTaskBtn.addEventListener("click", () => {
	mainContainer.style.filter = "blur(5px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
});

closeTaskManagerBtn.addEventListener("click", () => {
	closeTaskManager();
});

confirmBtn.addEventListener("click", () => {
	let task = createTask(titleInput.value);
	addTask(task);
	closeTaskManager();
	clearInputs();
});

function closeTaskManager() {
	taskManager.style.display = "none";
	mainContainer.style.filter = "none";

	addTaskBtn.style.cursor = "pointer";
}

function clearInputs() {
	titleInput.value = "";
}

function createTask(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	};
}

function addTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");

	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	div.appendChild(checkbox);
	
	let priority = document.createElement("p");
	// Make color later
	priority.textContent = task.priority;
	div.appendChild(priority);


	let h3 = document.createElement("h3");
	h3.textContent = task.title;
	div.appendChild(h3);

	
	let dueDate = document.createElement("div");
	dueDate.textContent = task.dueDate;
	div.appendChild(dueDate);


	taskList.appendChild(div);
}

export { taskManager, createTask, addTask };
