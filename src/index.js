import "./style.css";
import { mainContainer, taskList, addTaskBtn } from "./global.js";
import { taskManager } from "./taskManager.js";

let task1 = createTask("den", "a", "23", "low");
addTask(task1);

addTaskBtn.addEventListener("click", () => {
	mainContainer.style.filter =  "blur(10px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
});

// functions
function createTask(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	};
}

function addTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");
	div.textContent = task.title;
	taskList.appendChild(div);
}
