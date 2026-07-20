const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const workspacesDiv = document.querySelector(".workspaces");

let initialWorkspace = createWorkspace("My Workspace");
let workspaces = [initialWorkspace];

renderWorkspaces();

addWorkspaceBtn.addEventListener("click", (e) => {
	let workspace = createWorkspace("deneme");
	workspaces.push(workspace);
	renderWorkspaces();
});

function createWorkspace(name) {
	let taskList = [];
	return { name, taskList };
};

function renderWorkspaces() {
	workspacesDiv.replaceChildren();
	workspaces.forEach((workspace) => {
		let div = document.createElement("div");
		div.textContent = workspace.name;
		workspacesDiv.appendChild(div);
	});
};