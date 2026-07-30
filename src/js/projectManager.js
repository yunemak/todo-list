import { mainContainer, body } from "./global.js";
import closeImage from "../assets/close.png";

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
	projectManager.appendChild(createTitleInput());
	projectManager.appendChild(confirmProjectButton(projectManager));
}

function createTitleInput() {
	const inputContainer = document.createElement("form");
	inputContainer.classList.add("input-container");

	const titleLabel = document.createElement("label");
	inputContainer.appendChild(titleLabel);
	titleLabel.textContent = "Title:";
	titleLabel.setAttribute("for", "title-input");

	const titleInput = document.createElement("input");
	inputContainer.appendChild(titleInput);
	titleInput.classList.add("title-input");
	titleInput.setAttribute("id", "title-input");
	titleInput.setAttribute("minlength", "1");

	return inputContainer;
}

function confirmProjectButton(projectManager) {
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
		projectManager.remove();
		setBackgroundDisabled(false);
	});
	return closeButton;
}
