/*
	This function only renders global "projects" variable, and nothing more
	Turns JSON object data to UI
	JSON -> UI
*/

import { sideBar } from "./global.js";
import { getProjects } from "./projectUtils.js";

function renderProjects() {
	getProjects().forEach((project) => {
		sideBar.appendChild(createProjectElement(project.name));
	});
	return 0;
}

function createProjectElement(name) {
	let div = document.createElement("div");
	div.classList.add("project");
	div.textContent = name;
	return div;
}

export { renderProjects };
