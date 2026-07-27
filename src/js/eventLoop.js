import { selectedWorkspace, workspacesDiv, workspaces } from "./global.js";

renderWorkspaces();

function renderWorkspaces() {
	selectedWorkspace.replaceChildren();
	workspacesDiv.replaceChildren();
	workspaces.forEach((workspace) => {
		let div = document.createElement("div");
		div.classList.add("workspace");
		div.textContent = workspace.name;
		if (workspace.isSelected) {
			for (let task of workspace.taskList) {
				addTask(task);
			}
		}
		workspacesDiv.appendChild(div);
	});
}

export { renderWorkspaces };
