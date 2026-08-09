import { addProjectButton } from "./global.js";
import { setBackgroundDisabled } from "./managerCommon.js";
import { createProjectManager } from "./createProjectManager.js";
import { createProject, getProjects } from "./projectUtils.js";
import { updateLocalStorage } from "./localStorageUtils.js";
import { renderProjects } from "./renderProjects.js";

addProjectButton.addEventListener("click", () => {
	setBackgroundDisabled(true);
	createProjectManager();

	const formElement = document.querySelector("form");
	formElement.addEventListener("submit", (e) => {
		e.preventDefault();
		const nameInput = document.getElementById("name-input");
		console.log("(1)");
		console.log(getProjects());
		createProject(nameInput.value);
		console.log("(2)");
		console.log(getProjects());
		updateLocalStorage();
		console.log("(3)");
		console.log(getProjects());
		renderProjects();
		destroyProjectManager();
	});
});

function destroyProjectManager() {
	const projectManager = document.querySelector(".project-manager");
	projectManager.remove();
	setBackgroundDisabled(false);
}
