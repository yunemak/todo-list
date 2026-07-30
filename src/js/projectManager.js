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

	manager.appendChild(createCloseButton(manager));
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

function createCloseButton(manager) {
	let closeButton = document.createElement("button");
	closeButton.classList.add("close-button");
	let closeButtonImage = document.createElement("img");
	closeButtonImage.classList.add("icon");
	closeButtonImage.src = closeImage;
	closeButton.appendChild(closeButtonImage);

	// Function
	closeButton.addEventListener("click", () => {
		destroyProjectManager(manager);
		enableBackground();
	});
	return closeButton;
}

function destroyProjectManager(manager) {
	manager.remove();
}

function enableBackground() {
	mainContainer.style.filter = "none";
	enableButtons();
}

function enableButtons() {
	addProjectButton.disabled = false; // later enable
	addProjectButton.classList.remove("button-disabled");
	addProjectButton.classList.add("button");
	addTaskButton.disabled = false; // later enable
	addTaskButton.classList.remove("button-disabled");
	addTaskButton.classList.add("button");
}
