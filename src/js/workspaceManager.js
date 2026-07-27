import {
	mainContainer,
	selectedWorkspace,
	workspacesDiv,
	workspaces,
} from "./global.js";
import { addTask, createTask } from "./taskManager.js";
import { renderWorkspaces } from "./eventLoop.js";

const workspaceManager = document.getElementById("workspace-manager");
const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const workspaceForm = document.getElementById("workspace-form");
const closeWorkspaceManagerBtn = document.getElementById(
	"close-workspace-manager-btn",
);

// Input
const workspaceNameInput = document.getElementById("workspace-name");

// Initial Workspace
let initialWorkspace = createWorkspace("My Workspace");
initialWorkspace.isSelected = true;

workspaces.push(initialWorkspace);

initialWorkspace.taskList.push(
	createTask(
		"Drink Water",
		"You have to drink water to stay alive",
		"26-07-2026",
		"high",
	),
);
initialWorkspace.taskList.push(
	createTask(
		"Eat Meal",
		"You have to eat to stay energytic",
		"26-07-2026",
		"medium",
	),
);
initialWorkspace.taskList.push(
	createTask(
		"Eat Vegetable",
		"Eating vegatable is important to your health",
		"26-07-2026",
		"low",
	),
);

addWorkspaceBtn.addEventListener("click", (e) => {
	openWorkspaceManager();
});

closeWorkspaceManagerBtn.addEventListener("click", (e) => {
	closeWorkspaceManager();
});

workspaceForm.addEventListener("submit", (e) => {
	console.log("here");
	e.preventDefault();
	workspaces.push(createWorkspace(workspaceNameInput.value));
	renderWorkspaces();
	console.log(workspaces);
	closeWorkspaceManager();
});

function createWorkspace(name) {
	let taskList = [];
	let isSelected = false;
	return { name, taskList, isSelected };
}

function openWorkspaceManager() {
	mainContainer.style.filter = "blur(5px)";
	workspaceManager.style.display = "flex";
}

function closeWorkspaceManager() {
	mainContainer.style.filter = "none";
	workspaceManager.style.display = "none";
}
