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

	taskManager.appendChild(createFormElement(taskManager,));

	return taskManager;
}

function createFormElement(taskManager) {
	const formElement = document.createElement("form");
	formElement.appendChild(createTitleInput());
	formElement.appendChild(createDescriptionInput());
	formElement.appendChild(createDueDateInput());
	formElement.appendChild(createPriorityInput());
	formElement.appendChild(createConfirmButton(taskManager));
	
	formElement.addEventListener("submit", (e) => {
		e.preventDefault();
		getProjects().forEach((project) => {
			if (project.isSelected) {
				const titleInput = document.querySelector(".title-input");
				const dueDateInput = document.querySelector(".due-date-input");
				const descriptionInput =
					document.querySelector(".description-input");
				const priorityOption = document.querySelector(
					"input[name='priority']:checked",
				);
				project.taskList.push(
					createTask(
						titleInput.value,
						descriptionInput.value,
						dueDateInput.value,
						priorityOption.value,
					),
				);
				renderTasks(project);
			}
		});
		destroyTaskManager();
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
	dueDateLabel.textContent = "Due Date:";

	const dueDateInput = document.createElement("input");
	dueDateInput.classList.add("due-date-input");
	dueDateInput.setAttribute("type", "date");
	dueDateInput.setAttribute("required", "");

	dueDateContainer.appendChild(dueDateLabel);
	dueDateContainer.appendChild(dueDateInput);

	return dueDateContainer;
}

function createPriorityInput() {
	const priorityContainer = document.createElement("div");
	priorityContainer.classList.add("input-container");

	const priorityLabel = document.createElement("label");
	priorityLabel.classList.add("input-label");
	priorityLabel.textContent = "Priority:";

	const priorityInputs = document.createElement("div");
	priorityInputs.classList.add("priority-inputs");

	for (let priority of ["low", "medium", "high"]) {
		const radioContainer = document.createElement("div");
		radioContainer.classList.add("radio-container");

		const priorityLabel = document.createElement("label");
		priorityLabel.textContent = priority;
		priorityLabel.setAttribute("for", `${priority}-priority`);

		const priorityInput = document.createElement("input");
		priorityInput.type = "radio";
		priorityInput.setAttribute("name", "priority");
		priorityInput.setAttribute("value", priority);
		priorityInput.setAttribute("id", `${priority}-priority`);

		radioContainer.appendChild(priorityInput);
		radioContainer.appendChild(priorityLabel);

		priorityInputs.appendChild(radioContainer);
	}

	priorityContainer.appendChild(priorityLabel);
	priorityContainer.appendChild(priorityInputs);

	return priorityContainer;
}

function destroyTaskManager() {
	setBackgroundDisabled(false);
	const taskManager = document.querySelector(".task-manager");
	taskManager.remove();
}

export { createTaskManager, destroyTaskManager };
