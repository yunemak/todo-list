import { canvas } from "./global.js";

function renderTasks(project) {
	canvas.replaceChildren();
	const container = document.createElement("div");
	project.taskList.forEach((task) => {
		container.appendChild(createTaskElement(task));
	});

	canvas.appendChild(container);
}

function createTaskElement(task) {
	const taskElement = document.createElement("div");
	taskElement.classList.add("task");

	const taskShortElement = document.createElement("div");
	taskShortElement.classList.add("task-short");

	taskShortElement.appendChild(createCheckBox(task));
	taskShortElement.appendChild(createTitleElement(task));
	taskShortElement.appendChild(createDueDateElement(task));

	taskElement.appendChild(taskShortElement);
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
	dueDateElement.textContent = "due Date";
	return dueDateElement;
}

export { renderTasks };
