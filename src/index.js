import "./style.css";
import { mainContainer, addTaskBtn, createTask, addTask } from "./js/global.js";
import { taskManager } from "./js/taskManager.js";
import "./js/sidebar.js";
import "./js/workspaceManager.js";

let task1 = createTask("den", "a", "23", "low");
addTask(task1);

addTaskBtn.addEventListener("click", () => {
	mainContainer.style.filter = "blur(10px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
});

