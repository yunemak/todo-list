import { canvas } from "./global.js";
import { removeProject, removeTask } from "./projectUtils.js";
import { parseISO, format } from "date-fns";
import trashBinImage from "../assets/trash-bin.png";
import { setBackgroundDisabled } from "./managerCommon.js";

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

	if (task.priority === "low") {
		taskElement.classList.add("low-priority");
	} else if (task.priority === "medium") {
		taskElement.classList.add("medium-priority");
	} else {
		taskElement.classList.add("high-priority");
	}

	taskElement.appendChild(createDescriptionElement(task, taskElement));
	taskElement.appendChild(createEditButton(task, project, taskElement));

	return taskElement;
}

function createEditButton(task, project, taskElement) {
	const editButton = document.createElement("button");
	editButton.classList.add("edit-button");
	editButton.textContent = "Edit";

	taskElement.addEventListener("click", (e) => {
		e.stopPropagation();
		if (editButton.style.display === "flex") {
			editButton.style.display = "none";
		} else {
			editButton.style.display = "flex";
		}
	});

	editButton.addEventListener("click", (e) => {
		e.stopPropagation();
		const taskManager = createTaskManager();
		fillTaskManager(task);
		const formElement = document.querySelector("form");

		formElement.addEventListener("submit", (e) => {
			e.preventDefault();
			const titleInput = formElement.querySelector(".title-input");
			task.title = titleInput.value;
			const descriptionInput =
				formElement.querySelector(".description-input");
			task.description = descriptionInput.value;
			const dueDateInput = formElement.querySelector(".due-date-input");
			task.dueDate = dueDateInput.value;
			const priorityOption = formElement.querySelector(
				"input[name='priority']:checked",
			);
			task.priority = priorityOption.value;
			renderTasks(project);
			destroyTaskManager();
		});
	});

	return editButton;
}

function fillTaskManager(task) {
	const titleInput = document.querySelector(".title-input");
	titleInput.value = task.title;
	const descriptionInput = document.querySelector(".description-input");
	descriptionInput.value = task.description;
	const dueDateInput = document.querySelector(".due-date-input");
	dueDateInput.value = task.dueDate;
	const priorityInput = document.querySelector(`#${task.priority}-priority`);
	priorityInput.checked = true;
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
	dueDateElement.textContent = format(parseISO(task.dueDate), "dd MMM yyyy");

	return dueDateElement;
}

function createDescriptionElement(task, taskElement) {
	const descriptionElement = document.createElement("p");
	descriptionElement.classList.add("description");
	descriptionElement.textContent = task.description;
	taskElement.addEventListener("click", () => {
		if (descriptionElement.style.display === "flex") {
			descriptionElement.style.display = "none";
		} else {
			descriptionElement.style.display = "flex";
		}
	});
	return descriptionElement;
}

function createDeleteElement(task, taskElement, project) {
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-button");

	const deleteImage = document.createElement("img");
	deleteImage.setAttribute("src", trashBinImage);

	deleteButton.appendChild(deleteImage);

	deleteButton.addEventListener("click", (e) => {
		e.stopPropagation();
		removeTask(project.id, task.id);
		taskElement.remove(task.id);
	});
	return deleteButton;
}

export { renderTasks };
