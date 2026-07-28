import { selectedWorkspace, workspacesDiv, workspaces } from "./global.js";
import trashBinImg from "./../assets/trash-bin.png";
import editImg from "./../assets/edit.png";

function renderTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");

	// Priority
	let priority = document.createElement("p");
	priority.classList.add("priority");
	priority.classList.add(`${task.priority}-priority`);
	div.appendChild(priority);

	// Title
	let h3 = document.createElement("h3");
	h3.textContent = task.title;
	div.appendChild(h3);

	// // Due Date
	// let dueDate = document.createElement("div");
	// dueDate.textContent = task.dueDate;
	// div.appendChild(dueDate);

	// // Description
	// let description = document.createElement("p");
	// description.textContent = task.description;
	// div.appendChild(description);

	// Options
	addTaskOptions(div);

	selectedWorkspace.appendChild(div);
}

function addTaskOptions(div) {
	let taskOptions = document.createElement("div");
	taskOptions.classList.add("task-options");
	div.appendChild(taskOptions);

	let checkbox = document.createElement("input");
	checkbox.classList.add("checkbox-btn");
	checkbox.type = "checkbox";
	taskOptions.appendChild(checkbox);

	let editBtn = createButton(createImg(editImg, "icon"), "edit-btn");
	let deleteBtn = createButton(createImg(trashBinImg, "icon"), "delete-btn");
	taskOptions.appendChild(editBtn);
	taskOptions.appendChild(deleteBtn);
}

function createButton(img, className) {
	let button = document.createElement("button");
	button.type = "button";
	button.classList.add(className);
	button.appendChild(img);
	return button;
}

function createImg(src, className) {
	let img = document.createElement("img");
	img.src = src;
	img.classList.add(className);
	return img;
}

export { renderTask };
