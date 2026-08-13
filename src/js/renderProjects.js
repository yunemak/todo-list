/*
	This function only renders global "projects" variable, and nothing more
	Turns JSON object data to UI
	JSON -> UI
*/

import { sideBar } from "./global.js";
import { updateLocalStorage } from "./localStorageUtils.js";
import { removeProject, selectProject } from "./projectUtils.js";
import { renderTasks } from "./renderTasks.js";
import { getLocalProjects } from "./localStorageUtils.js";
import trashBinImage from "../assets/trash-bin.png";

function renderProjects() {
	sideBar.replaceChildren();
	getLocalProjects().forEach((project) => {
		sideBar.appendChild(createProjectElement(project));
		if (project.isSelected) {
			renderTasks(project);
		}
	});
	let projects = getLocalProjects();
	for (let p of projects) {
		if (p.isSelected) {
			renderTasks(p);
		}
	}
}

function createProjectElement(project) {
	let div = document.createElement("div");
	div.dataset.projectId = project.id;
	div.classList.add("project");
	div.textContent = project.name;
	div.addEventListener("click", () => {
		selectProject(project);
		renderTasks(project);
	});
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-project-button");

	let deleteIcon = document.createElement("img");
	deleteIcon.classList.add("icon");
	deleteIcon.src = trashBinImage;

	deleteButton.appendChild(deleteIcon);

	deleteButton.addEventListener("click", (e) => {
		e.stopPropagation();
		removeProject(project);
	});
	div.appendChild(deleteButton);
	return div;
}

export { renderProjects };
