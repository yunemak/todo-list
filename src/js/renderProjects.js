/*
	This function only renders global "projects" variable, and nothing more
	Turns JSON object data to UI
	JSON -> UI
*/

import { sideBar } from "./global.js";
import { updateLocalStorage } from "./localStorageUtils.js";
import { selectProject } from "./projectUtils.js";
import { renderTasks } from "./renderTasks.js";
import { getLocalProjects } from "./localStorageUtils.js";

function renderProjects() {
	sideBar.replaceChildren();
	getLocalProjects().forEach((project) => {
		sideBar.appendChild(createProjectElement(project));
		if (project.isSelected) {
			renderTasks(project);
		}
	});
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
	return div;
}

export { renderProjects };
