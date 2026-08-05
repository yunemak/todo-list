import { mainContainer, body, addTaskButton } from "./global.js";
import { createCloseButton, setBackgroundDisabled } from "./managerCommon.js";

addTaskButton.addEventListener("click", () => {
	const taskManager = createTaskManager();
});

function createTaskManager() {
	const taskManager = document.createElement("div");
	taskManager.classList.add("task-manager");
	body.appendChild(taskManager);

	taskManager.appendChild(createTitleInput());
	taskManager.appendChild(createCloseButton(taskManager));

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
	titleInput.setAttribute("required", "");

	return titleContainer;
}

function destroyTaskManager(taskManager) {
	taskManager.remove();
}
