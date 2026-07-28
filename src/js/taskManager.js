import { mainContainer, selectedWorkspace, workspaces } from "./global.js";

import { renderTask } from "./renderTask.js";

const taskManager = document.getElementById("task-manager");
const taskForm = document.querySelector("#task-form");
const closeTaskManagerBtn = document.getElementById("close-task-manager-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const addTaskBtn = document.querySelector("#add-task-btn");

// Form inputs
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due-date");

addTaskBtn.addEventListener("click", () => {
	openTaskManager();
});

closeTaskManagerBtn.addEventListener("click", () => {
	closeTaskManager();
});

taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const priorityInput = document.querySelector(
		"input[name='priority-options']:checked",
	);
	let task = createTask(
		titleInput.value,
		descriptionInput.value,
		dueDateInput.value,
		priorityInput.value,
	);
	for (let workspace of workspaces) {
		if (workspace.isSelected) {
			workspace.taskList.push(task);
			break;
		}
	}
	renderTask(task, selectedWorkspace);
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

function openTaskManager() {
	confirmBtn.textContent = "Confirm";
	mainContainer.style.filter = "blur(5px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
}

function createTask(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	};
}

export {
	createTask,
	taskForm,
	confirmBtn,
	titleInput,
	descriptionInput,
	dueDateInput,
	openTaskManager,
};
