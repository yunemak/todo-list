const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const workspacesDiv = document.querySelector(".workspaces");
const confirmWorkspaceBtn = document.getElementById("confirm-workspace-btn");
const workspaceManager = document.querySelector(".workspace-manager");

let initialWorkspace = createWorkspace("My Workspace");
let workspaces = [initialWorkspace];

renderWorkspaces();

addWorkspaceBtn.addEventListener("click", (e) => {
	openWorkspaceManager();
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
	workspaceManager.style.display = "flex";
};