import { project } from "./global.js";

function renderTasks(tasks) {
	removeCurrentContainer();
	const container = document.createElement("div");
	container.id = "current-container";

	console.log(tasks);
	tasks.forEach((task) => {
		const div = document.createElement("div");
		container.appendChild(div);
		div.classList.add("task");
		div.textContent = task.title;
	});

	project.appendChild(container);
}

function removeCurrentContainer() {
	const currentContainer = document.getElementById("current-container");
	if (currentContainer !== null) {
		currentContainer.remove();
	}
}

export { renderTasks };
