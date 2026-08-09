import { projects, getProjects } from "./projectUtils.js";

function updateLocalStorage() {
	localStorage.setItem("projects", JSON.stringify(projects));
}

function getLocalProjects() {
	return JSON.parse(localStorage.getItem("projects"));
}

export { updateLocalStorage, getLocalProjects };
