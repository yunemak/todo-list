import { selectedWorkspace, workspacesDiv, workspaces } from "./global.js";
import { addTask } from "./taskManager.js";

function renderWorkspaces() {
	selectedWorkspace.replaceChildren();
	workspacesDiv.replaceChildren();
	console.log(workspaces);
	workspaces.forEach((workspace) => {
		console.log(workspace.name);
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
