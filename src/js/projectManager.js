import { mainContainer, body } from "./global.js";

const addTaskButton = document.getElementById("add-task-button");
const addProjectButton = document.getElementById("add-project-button");

addProjectButton.addEventListener("click", (e) => {
	disableBackground();
	createProjectManager();
});

function createProjectManager() {
	let manager = document.createElement("div");
	manager.classList.add("project-manager");
	body.appendChild(manager);
}

function disableBackground() {
	mainContainer.style.filter = "blur(5px)";
}
