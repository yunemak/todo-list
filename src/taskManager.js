import { mainContainer, addTaskBtn, createTask, addTask } from "./global.js";

const taskManager = document.querySelector(".task-manager");
const closeTaskManagerBtn = document.querySelector(".close-task-manager-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const titleInput = document.querySelector("#title");

closeTaskManagerBtn.addEventListener("click", () => {
	closeTaskManager();
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

export { taskManager };
