import { selectedWorkspace, workspacesDiv, workspaces } from "./global.js";
import trashBinImg from "./../assets/trash-bin.png";
import editImg from "./../assets/edit.png";

function renderTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");

	let priority = document.createElement("p");
	priority.classList.add("priority");
	priority.classList.add(`${task.priority}-priority`);
	div.appendChild(priority);

	let divShort = document.createElement("div");
	divShort.classList.add("task-short");
	div.appendChild(divShort);

	// Priority

	// Check
	let checkbox = document.createElement("input");
	checkbox.classList.add("checkbox-btn");
	checkbox.type = "checkbox";
	divShort.appendChild(checkbox);

	// Edit Button
	let editBtn = createButton(createImg(editImg, "icon"), "edit-btn");
	divShort.appendChild(editBtn);

	// Title
	let h3 = document.createElement("h3");
	h3.textContent = task.title;
	divShort.appendChild(h3);

	// Delete Button
	let deleteBtn = createButton(createImg(trashBinImg, "icon"), "delete-btn");
	divShort.appendChild(deleteBtn);

	selectedWorkspace.appendChild(div);

	let taskControl = 0;
	div.addEventListener("click", () => {
		if (taskControl === 0) {
			div.style.height = "200px";
			taskControl = 1;
		} else {
			div.style.height = "50px";
			taskControl = 0;
		}
	});

	// // Due Date
	// let dueDate = document.createElement("div");
	// dueDate.textContent = task.dueDate;
	// div.appendChild(dueDate);

	// // Description
	// let description = document.createElement("p");
	// description.textContent = task.description;
	// div.appendChild(description);
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
