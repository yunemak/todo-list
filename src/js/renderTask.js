import { selectedWorkspace, workspacesDiv, workspaces } from "./global.js";
import trashBinImg from "./../assets/trash-bin.png";
import editImg from "./../assets/edit.png";

function renderTask(task) {
	let containerDiv = document.createElement("div");
	containerDiv.classList.add("task-container");

	// Priority later may be changed to div's border color
	let priority = document.createElement("p");
	priority.classList.add("priority");
	priority.classList.add(`${task.priority}-priority`);
	containerDiv.appendChild(priority);

	let div = document.createElement("div");
	div.classList.add("task");
	containerDiv.appendChild(div);

	let divShort = document.createElement("div");
	divShort.classList.add("task-short");
	div.appendChild(divShort);

	// Check Box
	addCheckBox(divShort);

	// Edit Button
	let editBtn = createButton(createImg(editImg, "icon"), "edit-btn");
	editBtn.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	divShort.appendChild(editBtn);

	// Title
	let h3 = document.createElement("h3");
	h3.textContent = task.title;
	divShort.appendChild(h3);

	let dueDate = document.createElement("div");
	dueDate.textContent = task.dueDate;
	dueDate.classList.add("due-date");
	divShort.appendChild(dueDate);

	// Delete Button
	addDeleteBtn(divShort);

	selectedWorkspace.appendChild(containerDiv);

	let taskControl = 0;
	div.addEventListener("click", () => {
		if (taskControl === 0) {
			containerDiv.style.height = "200px";
			renderDescription(div, task);
			taskControl = 1;
		} else {
			containerDiv.style.height = "50px";
			destroyDescription(div);
			taskControl = 0;
		}
	});
}

function addDeleteBtn(divShort) {
	let deleteBtn = createButton(createImg(trashBinImg, "icon"), "delete-btn");
	deleteBtn.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	divShort.appendChild(deleteBtn);
}

function addCheckBox(divShort) {
	let checkbox = document.createElement("input");
	checkbox.classList.add("checkbox-btn");
	checkbox.type = "checkbox";
	checkbox.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	divShort.appendChild(checkbox);
}

function renderDescription(div, task) {
	// Description
	let description = document.createElement("p");
	description.textContent = task.description;
	description.classList.add("description");
	div.appendChild(description);
}

function destroyDescription(div) {
	div.lastElementChild.remove();
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
