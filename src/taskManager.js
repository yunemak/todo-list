import { mainContainer, taskList, addTaskBtn } from "./global.js";

const taskManager = document.querySelector(".task-manager");
const closeTaskManagerBtn = document.querySelector(".close-btn");

closeTaskManagerBtn.addEventListener("click", () => {
	taskManager.style.display = "none";
	mainContainer.style.filter = "none";
	addTaskBtn.style.cursor = "pointer";
});

export { taskManager };
