/*
	This function only renders global "projects" variable, and nothing more
	Turns JSON object data to UI
	JSON -> UI
*/

import { sideBar } from "./global.js";
import { getProjects } from "./projectUtils.js";
import { renderTasks } from "./renderTasks.js";

function renderProjects() {
	sideBar.replaceChildren();
	getProjects().forEach((project) => {
		sideBar.appendChild(createProjectElement(project));
	});
	return 0;
}

function createProjectElement(project) {
	let div = document.createElement("div");
	div.dataset.projectId = project.id;
	div.classList.add("project");
	div.textContent = project.name;
	div.addEventListener("click", () => {
		renderTasks(project);
	});
	return div;
}

export { renderProjects };
