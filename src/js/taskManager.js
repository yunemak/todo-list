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
	titleInput.setAttribute("required", "");

	return titleContainer;
}

function createCloseButton(projectManager) {
	const closeButton = document.createElement("button");
	closeButton.classList.add("close-button");
	const closeButtonImage = document.createElement("img");
	closeButtonImage.classList.add("icon");
	closeButtonImage.src = closeImage;
	closeButton.appendChild(closeButtonImage);

	// Function
	closeButton.addEventListener("click", () => {
		destroyTaskManager(projectManager);
	});
	return closeButton;
}

function destroyTaskManager(taskManager) {
	taskManager.remove();
}
