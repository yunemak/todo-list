import "./style.css";
import { mainContainer, addTaskBtn, createTask, addTask } from "./global.js";
import { taskManager } from "./taskManager.js";

let task1 = createTask("den", "a", "23", "low");
addTask(task1);

addTaskBtn.addEventListener("click", () => {
	mainContainer.style.filter = "blur(10px)";
	taskManager.style.display = "flex";
	addTaskBtn.style.cursor = "default";
});

const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const sidebar = document.querySelector(".sidebar");

closeSidebarBtn.addEventListener("click",(e) => {
	sidebar.style.display = "none";
	openSidebarBtn.style.display = "inline";
});

openSidebarBtn.addEventListener("click", (e) => {
	sidebar.style.display = "flex";
	openSidebarBtn.style.display = "none";
});
