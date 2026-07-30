import { mainContainer } from "./global.js";

const addTaskButton = document.getElementById("add-task-button");
const addProjectButton = document.getElementById("add-project-button");

addProjectButton.addEventListener("click", (e) => {
	disableBackground();
	createProjectManager();
});

function createProjectManager() {
	console.log("project manager is created");
}

function disableBackground() {
	mainContainer.style.filter = "blur(5px)";
}
