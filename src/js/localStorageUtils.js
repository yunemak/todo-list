import { projects } from "./projectUtils.js";

function updateLocalStorage() {
	localStorage.setItem("projects", JSON.stringify(projects));
}

export { updateLocalStorage };
