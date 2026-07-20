import "./style.css";
import { mainContainer, addTaskBtn, createTask, addTask } from "./global.js";
import { taskManager } from "./taskManager.js";
import "./sidebar.js";
import "./workspaceManager.js";

let task1 = createTask("den", "a", "23", "low");
addTask(task1);

addTaskBtn.addEventListener("click", () => {
	mainContainer.style.filter = "blur(10px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
});

