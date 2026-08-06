import { mainContainer, body, addTaskButton } from "./global.js";
import {
	createCloseButton,
	createConfirmButton,
	setBackgroundDisabled,
} from "./managerCommon.js";
import { getProjects } from "./projectUtils.js";
import { createTask } from "./createTask.js";
import { renderTasks } from "./renderTasks.js";

addTaskButton.addEventListener("click", () => {
	const taskManager = createTaskManager();
});

function createTaskManager() {
	const taskManager = document.createElement("div");
	taskManager.classList.add("task-manager");
	body.appendChild(taskManager);

	taskManager.appendChild(createCloseButton(taskManager));

	taskManager.appendChild(createFormElement(taskManager));

	return taskManager;
}

function createFormElement(taskManager) {
	const formElement = document.createElement("form");
	formElement.appendChild(createTitleInput());
	formElement.appendChild(createConfirmButton(taskManager));

	formElement.addEventListener("submit", (e) => {
		e.preventDefault();
		getProjects().forEach((project) => {
			if (project.isSelected) {
				console.log("the task is pushed to project");
				project.taskList.push(createTask("aaasssddd"));
				renderTasks(project);
			}
		});
		destroyTaskManager(taskManager);
	});

	return formElement;
}

function createTitleInput() {
	const titleContainer = document.createElement("div");
	titleContainer.classList.add("input-container");

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
