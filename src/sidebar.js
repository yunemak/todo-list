const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const workspacesDiv = document.querySelector(".workspaces");

let initialWorkspace = createWorkspace("My Workspace");
let workspaces = [initialWorkspace];

renderWorkspaces();

closeSidebarBtn.addEventListener("click", (e) => {
	sidebar.style.display = "none";
	openSidebarBtn.style.display = "inline";
});

openSidebarBtn.addEventListener("click", (e) => {
	sidebar.style.display = "flex";
	openSidebarBtn.style.display = "none";
});

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