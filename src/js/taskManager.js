import { mainContainer, body } from "./global.js";

const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", () => {
	const taskManager = createTaskManager();
});

function createTaskManager() {
	const taskManager = document.createElement("div");
	taskManager.classList.add("task-manager");
	body.appendChild(taskManager);
	return taskManager;
}

function destroyTaskManager(taskManager) {
	taskManager.remove();
}
