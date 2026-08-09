import { getProjects } from "./projectUtils.js";

function updateLocalStorage(projects) {
	localStorage.setItem("projects", JSON.stringify(projects));
}

function getLocalProjects() {
	let projects = JSON.parse(localStorage.getItem("projects"));
	if (!projects) {
		return [];
	}
	return projects;
}

export { updateLocalStorage, getLocalProjects };
