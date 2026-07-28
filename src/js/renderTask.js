import { selectedWorkspaceDiv, workspacesDiv, workspaces } from "./global.js";
import { renderWorkspace } from "./renderWorkspace.js";
import { addDeleteBtn, addEditBtn, addCheckBox } from "./taskButtons.js";

function renderTask(task, workspace) {
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
	addEditBtn(divShort, task);

	// Title
	let h3 = document.createElement("h3");
	h3.textContent = task.title;
	divShort.appendChild(h3);

	let dueDate = document.createElement("div");
	dueDate.textContent = task.dueDate;
	dueDate.classList.add("due-date");
	divShort.appendChild(dueDate);

	// Delete Button
	addDeleteBtn(divShort, task, workspace, containerDiv);

	selectedWorkspaceDiv.appendChild(containerDiv);

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

export { renderTask };
