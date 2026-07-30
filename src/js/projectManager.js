import { mainContainer, body } from "./global.js";
import closeImage from "../assets/close.png";

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

	// Close Button
	let closeButton = document.createElement("button");
	closeButton.classList.add("close-button");
	let closeButtonImage = document.createElement("img");
	closeButtonImage.classList.add("icon");
	closeButtonImage.src = closeImage;
	closeButton.appendChild(closeButtonImage);
	manager.appendChild(closeButton);
}

function disableBackground() {
	mainContainer.style.filter = "blur(5px)";
	disableButtons();
}

function disableButtons() {
	addProjectButton.disabled = true; // later enable
	addProjectButton.classList.remove("button");
	addProjectButton.classList.add("button-disabled");
	addTaskButton.disabled = true; // later enable
	addTaskButton.classList.remove("button");
	addTaskButton.classList.add("button-disabled");
}
