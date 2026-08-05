import { mainContainer, body, addProjectButton } from "./global.js";
import { createProject } from "./projectUtils.js";
import { renderProjects } from "./renderProjects.js";
import { createCloseButton, setBackgroundDisabled } from "./managerCommon.js";

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

function destroyProjectManager(projectManager) {
	projectManager.remove();
	setBackgroundDisabled(false);
}
