import { mainContainer, taskList, addTaskBtn, createTask, addTask } from "./global.js";

const taskManager = document.querySelector(".task-manager");
const closeTaskManagerBtn = document.querySelector(".close-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const titleInput = document.querySelector("#title");

closeTaskManagerBtn.addEventListener("click", () => {
	closeTaskManager();
});

confirmBtn.addEventListener("click", () => {
	let task = createTask(titleInput.value);
	addTask(task);
	closeTaskManager();
});

function closeTaskManager() {
	taskManager.style.display = "none";
	mainContainer.style.filter = "none";
	addTaskBtn.style.cursor = "pointer";
}

export { taskManager };
