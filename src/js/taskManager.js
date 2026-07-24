import { mainContainer, selectedWorkspace } from "./global.js";

const taskManager = document.querySelector(".task-manager");
const taskForm = document.querySelector("#task-form");
const closeTaskManagerBtn = document.querySelector(".close-task-manager-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const addTaskBtn = document.querySelector("#add-task-btn");

// Form inputs
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due-date");
const priorityInput = document.querySelector("input[name='priority']:checked");


addTaskBtn.addEventListener("click", () => {
	mainContainer.style.filter = "blur(5px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
});

closeTaskManagerBtn.addEventListener("click", () => {
	closeTaskManager();
});

taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let task = createTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
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

	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	div.appendChild(checkbox);

	selectedWorkspace.appendChild(div);
}

export { taskManager, createTask, addTask };
