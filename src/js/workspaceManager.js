import { mainContainer } from "./global.js";
import { addTask, createTask } from "./taskManager.js";

const workspaceManager = document.getElementById("workspace-manager");
const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const workspacesDiv = document.querySelector(".workspaces");
const workspaceForm = document.getElementById("workspace-form");
const closeWorkspaceManagerBtn = document.getElementById("close-workspace-manager-btn");

// Input
const workspaceNameInput = document.getElementById("workspace-name");

// Initial Workspace
let initialWorkspace = createWorkspace("My Workspace");

initialWorkspace.taskList.push(createTask("Drink Water", "You have to drink water to stay alive", "26-07-2026", "high"));
initialWorkspace.taskList.push(createTask("Eat Meal", "You have to eat to stay energytic", "26-07-2026", "medium"));
initialWorkspace.taskList.push(createTask("Eat Vegetable", "Eating vegatable is important to your health", "26-07-2026", "low"));


let workspaces = [initialWorkspace];

renderWorkspaces();

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
})


function createWorkspace(name) {
	let taskList = [];
	return { name, taskList };
};

function renderWorkspaces() {
	workspacesDiv.replaceChildren();
	workspaces.forEach((workspace) => {
		let div = document.createElement("div");
		div.classList.add("workspace");
		div.textContent = workspace.name;
		for (let task of workspace.taskList) {
			addTask(task);
		}
		workspacesDiv.appendChild(div);
	});
};

function openWorkspaceManager() {
	mainContainer.style.filter = "blur(5px)";
	workspaceManager.style.display = "flex";
};

function closeWorkspaceManager() {
	mainContainer.style.filter = "none";
	workspaceManager.style.display = "none";
}
