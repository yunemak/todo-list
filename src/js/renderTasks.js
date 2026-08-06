import { canvas } from "./global.js";
import { removeProject, removeTask } from "./projectUtils.js";

function renderTasks(project) {
	canvas.replaceChildren();
	const container = document.createElement("div");
	container.classList.add("task-list");
	project.taskList.forEach((task) => {
		container.appendChild(createTaskElement(task, project));
	});

	canvas.appendChild(container);
}

function createTaskElement(task, project) {
	const taskElement = document.createElement("div");
	taskElement.classList.add("task");

	const taskShortElement = document.createElement("div");
	taskShortElement.classList.add("task-short");

	taskShortElement.appendChild(createCheckBox(task));
	taskShortElement.appendChild(createTitleElement(task));
	taskShortElement.appendChild(createDueDateElement(task));
	taskShortElement.appendChild(
		createDeleteElement(task, taskElement, project),
	);

	taskElement.appendChild(taskShortElement);

	taskElement.appendChild(createDescriptionElement(task, taskElement));

	return taskElement;
}

function createCheckBox(task) {
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.classList.add("checkbox");
	return checkbox;
}

function createTitleElement(task) {
	const titleElement = document.createElement("h3");
	titleElement.classList.add("title");
	titleElement.textContent = task.title;
	return titleElement;
}

function createDueDateElement(task) {
	const dueDateElement = document.createElement("p");
	dueDateElement.classList.add("due-date");
	dueDateElement.textContent = "due Date";

	return dueDateElement;
}

function createDescriptionElement(task, taskElement) {
	const descriptionElement = document.createElement("p");
	descriptionElement.classList.add("description");
	descriptionElement.textContent = task.description;
	taskElement.addEventListener("click", () => {
		const descriptionElement = document.querySelector(".description");
		if (descriptionElement.style.display === "none") {
			descriptionElement.style.display = "flex";
		} else {
			descriptionElement.style.display = "none";
		}
	});
	return descriptionElement;
}

function createDeleteElement(task, taskElement, project) {
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "delete";
	deleteButton.classList.add("delete-button");
	deleteButton.addEventListener("click", (e) => {
		e.stopPropagation();
		removeTask(project.id, task.id);
		taskElement.remove(task.id);
	});
	return deleteButton;
}

export { renderTasks };
