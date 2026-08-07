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
	setBackgroundDisabled(true);
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
	formElement.appendChild(createDescriptionInput());
	formElement.appendChild(createDueDateInput());
	formElement.appendChild(createConfirmButton(taskManager));

	formElement.addEventListener("submit", (e) => {
		e.preventDefault();
		getProjects().forEach((project) => {
			if (project.isSelected) {
				const titleInput = document.querySelector(".title-input");
				const dueDateInput = document.querySelector(".due-date-input");
				const descriptionInput =
					document.querySelector(".description-input");
				project.taskList.push(
					createTask(
						titleInput.value,
						descriptionInput.value,
						dueDateInput.value,
					),
				);
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
	titleLabel.classList.add("input-label");
	titleLabel.textContent = "Title:";

	const titleInput = document.createElement("input");
	titleInput.classList.add("title-input");
	titleInput.setAttribute("required", "");

	titleContainer.appendChild(titleLabel);
	titleContainer.appendChild(titleInput);

	return titleContainer;
}

function createDescriptionInput() {
	const descriptionContainer = document.createElement("div");
	descriptionContainer.classList.add("input-container");

	const descriptionLabel = document.createElement("label");
	descriptionLabel.classList.add("input-label");
	descriptionLabel.textContent = "Description:";

	const descriptionInput = document.createElement("textarea");
	descriptionInput.classList.add("description-input");

	descriptionContainer.appendChild(descriptionLabel);
	descriptionContainer.appendChild(descriptionInput);

	return descriptionContainer;
}

function createDueDateInput() {
	const dueDateContainer = document.createElement("div");
	dueDateContainer.classList.add("input-container");

	const dueDateLabel = document.createElement("label");
	dueDateLabel.classList.add("input-label");
	dueDateLabel.textContent = "Due Date";

	const dueDateInput = document.createElement("input");
	dueDateInput.classList.add("due-date-input");
	dueDateInput.setAttribute("type", "date");
	dueDateInput.setAttribute("required", "");

	dueDateContainer.appendChild(dueDateLabel);
	dueDateContainer.appendChild(dueDateInput);

	return dueDateContainer;
}

function destroyTaskManager(taskManager) {
	setBackgroundDisabled(false);
	taskManager.remove();
}
