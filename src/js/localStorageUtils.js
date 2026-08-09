import { projects } from "./projectUtils";

function updateLocalStorage() {
	localStorage.setItem("projects", JSON.stringify(projects));
}

export { updateLocalStorage };
