import { mainContainer, body } from "./global.js";

const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", () => {
	const taskManager = createTaskManager();
});

function createTaskManager() {
	const taskManager = document.createElement("div");
	taskManager.classList.add("task-manager");
	body.appendChild(taskManager);

	taskManager.appendChild(createTitleInput());

	return taskManager;
}

function createTitleInput() {
	const titleContainer = document.createElement("div");
	titleContainer.classList.add("title-container");

	const titleLabel = document.createElement("label");
	titleLabel.classList.add("title-label");
	titleContainer.appendChild(titleLabel);
	titleLabel.textContent = "Title:";

	const titleInput = document.createElement("input");
	titleInput.classList.add("title-input");
	titleContainer.appendChild(titleInput);

	return titleContainer;
}

function destroyTaskManager(taskManager) {
	taskManager.remove();
}
