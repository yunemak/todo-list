import { mainContainer } from "./global.js";

const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const workspacesDiv = document.querySelector(".workspaces");
const confirmWorkspaceBtn = document.getElementById("confirm-workspace-btn");
const workspaceManager = document.querySelector(".workspace-manager");
const closeWorkspaceManagerBtn = document.querySelector(".close-workspace-manager-btn");

let initialWorkspace = createWorkspace("My Workspace");
let workspaces = [initialWorkspace];

renderWorkspaces();

addWorkspaceBtn.addEventListener("click", (e) => {
	openWorkspaceManager();
});

closeWorkspaceManagerBtn.addEventListener("click", (e) => {
	closeWorkspaceManager();
});


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
