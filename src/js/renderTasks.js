import { canvas } from "./global.js";

function renderTasks(project) {
	canvas.replaceChildren();
	const container = document.createElement("div");
	project.taskList.forEach((task) => {
		container.appendChild(createTaskElement(task));
	});

	canvas.appendChild(container);
}

function createTaskElement(task) {
	const div = document.createElement("div");
	div.classList.add("task");
	div.textContent = task.title;
	return div;
}

export { renderTasks };
