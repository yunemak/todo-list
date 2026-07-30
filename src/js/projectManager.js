import { mainContainer, body } from "./global.js";
import closeImage from "../assets/close.png";

const addTaskButton = document.getElementById("add-task-button");
const addProjectButton = document.getElementById("add-project-button");

addProjectButton.addEventListener("click", (e) => {
	setBackgroundDisabled(true);
	createProjectManager();
});

function createProjectManager() {
	const projectManager = document.createElement("div");
	projectManager.classList.add("project-manager");
	body.appendChild(projectManager);

	projectManager.appendChild(createCloseButton(projectManager));
}

function setBackgroundDisabled(isDisabled) {
	if (isDisabled) {
		mainContainer.classList.add("blurred");
	} else {
		mainContainer.classList.remove("blurred");
	}
	updateButtonState(addProjectButton, isDisabled);
	updateButtonState(addTaskButton, isDisabled);
}

function updateButtonState(button, isDisabled) {
	button.disabled = isDisabled;
	if (isDisabled) {
		button.classList.add("button-disabled");
		button.classList.remove("button");
	} else {
		button.classList.add("button");
		button.classList.remove("button-disabled");
	}
}

function createCloseButton(projectManager) {
	let closeButton = document.createElement("button");
	closeButton.classList.add("close-button");
	let closeButtonImage = document.createElement("img");
	closeButtonImage.classList.add("icon");
	closeButtonImage.src = closeImage;
	closeButton.appendChild(closeButtonImage);

	// Function
	closeButton.addEventListener("click", () => {
		projectManager.remove();
		setBackgroundDisabled(false);
	});
	return closeButton;
}
