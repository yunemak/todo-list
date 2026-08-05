import closeImage from "../assets/close.png";
import { addTaskButton, addProjectButton, mainContainer } from "./global.js";

function createCloseButton(manager) {
	const closeButton = document.createElement("button");
	closeButton.classList.add("close-button");
	const closeButtonImage = document.createElement("img");
	closeButtonImage.classList.add("icon");
	closeButtonImage.src = closeImage;
	closeButton.appendChild(closeButtonImage);

	// Function
	closeButton.addEventListener("click", () => {
		manager.remove();
		setBackgroundDisabled(false);
	});
	return closeButton;
}

function createConfirmButton(projectManager) {
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

export { createCloseButton, setBackgroundDisabled, createConfirmButton };
