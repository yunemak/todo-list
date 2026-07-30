import { sideBar } from "./global.js";
import { projects, getProjects } from "./projectUtils.js";

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
