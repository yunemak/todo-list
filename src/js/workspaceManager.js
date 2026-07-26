import { mainContainer } from "./global.js";

const workspaceManager = document.getElementById("workspace-manager");
const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const workspacesDiv = document.querySelector(".workspaces");
const workspaceForm = document.getElementById("workspace-form");
const closeWorkspaceManagerBtn = document.getElementById("close-workspace-manager-btn");

// Input
const workspaceNameInput = document.getElementById("workspace-name");

let initialWorkspace = createWorkspace("My Workspace");
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
