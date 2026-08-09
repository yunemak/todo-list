import { addTaskButton } from "./global.js";
import { setBackgroundDisabled } from "./managerCommon.js";
import { createTaskManager, destroyTaskManager } from "./createTaskManager.js";
import { updateLocalStorage, getLocalProjects } from "./localStorageUtils.js";
import { createTask } from "./taskUtils.js";
import { renderTasks } from "./renderTasks.js";

addTaskButton.addEventListener("click", () => {
	setBackgroundDisabled(true);
	const taskManager = createTaskManager();
	const formElement = taskManager.querySelector("form");
	formElement.addEventListener("submit", createNewTaskEvent);
});

function createNewTaskEvent(e) {
	e.preventDefault();
	let projects = getLocalProjects();

	projects.forEach((project) => {
		if (project.isSelected) {
			const titleInput = document.querySelector(".title-input");
			const dueDateInput = document.querySelector(".due-date-input");
			const descriptionInput =
				document.querySelector(".description-input");
			const priorityOption = document.querySelector(
				"input[name='priority']:checked",
			);
			project.taskList.push(
				createTask(
					titleInput.value,
					descriptionInput.value,
					dueDateInput.value,
					priorityOption.value,
				),
			);
			renderTasks(project);
		}
	});
	updateLocalStorage(projects);
	destroyTaskManager();
}
