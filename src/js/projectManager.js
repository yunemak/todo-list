import { mainContainer, body } from "./global.js";
import closeImage from "../assets/close.png";
import { createProject } from "./projectUtils.js";
import { renderProjects } from "./renderProjects.js";

const addTaskButton = document.getElementById("add-task-button");
const addProjectButton = document.getElementById("add-project-button");

addProjectButton.addEventListener("click", () => {
	setBackgroundDisabled(true);
	createProjectManager();
});

function createProjectManager() {
	const projectManager = document.createElement("div");
	projectManager.classList.add("project-manager");
	body.appendChild(projectManager);

	projectManager.appendChild(createCloseButton(projectManager));

	projectManager.appendChild(createFormElement(projectManager));
}

function createFormElement(projectManager) {
	const formElement = document.createElement("form");
	formElement.appendChild(createNameInput());
	formElement.appendChild(createConfirmProjectButton(projectManager));

	formElement.addEventListener("submit", (e) => {
		e.preventDefault();
		const nameInput = document.getElementById("name-input");
		createProject(nameInput.value);
		renderProjects();
		destroyProjectManager(projectManager);
	});

	return formElement;
}

function createNameInput() {
	const inputContainer = document.createElement("div");
	inputContainer.classList.add("input-container");

	const nameLabel = document.createElement("label");
	inputContainer.appendChild(nameLabel);
	nameLabel.textContent = "Name:";
	nameLabel.setAttribute("for", "name-input");

	const nameInput = document.createElement("input");
	inputContainer.appendChild(nameInput);
	nameInput.classList.add("name-input");
	nameInput.setAttribute("id", "name-input");
	nameInput.setAttribute("minlength", "1");
	nameInput.setAttribute("required", "");

	return inputContainer;
}

function createConfirmProjectButton(projectManager) {
	const confirmButton = document.createElement("button");
	confirmButton.classList.add("confirm-button");
	confirmButton.textContent = "Confirm";
	return confirmButton;
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
	const closeButton = document.createElement("button");
	closeButton.classList.add("close-button");
	const closeButtonImage = document.createElement("img");
	closeButtonImage.classList.add("icon");
	closeButtonImage.src = closeImage;
	closeButton.appendChild(closeButtonImage);

	// Function
	closeButton.addEventListener("click", () => {
		destroyProjectManager(projectManager);
	});
	return closeButton;
}

function destroyProjectManager(projectManager) {
	projectManager.remove();
	setBackgroundDisabled(false);
}
