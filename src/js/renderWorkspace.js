import {
	selectedWorkspace,
	workspacesDiv,
	workspaces,
	workspaceDivs,
} from "./global.js";
import { renderTask } from "./renderTask.js";

function renderWorkspaces() {
	selectedWorkspace.replaceChildren();
	workspacesDiv.replaceChildren();
	workspaces.forEach((workspace) => {
		let div = document.createElement("div");
		div.classList.add("workspace");
		div.textContent = workspace.name;
		if (workspace.isSelected) {
			for (let task of workspace.taskList) {
				renderTask(task);
			}
		}
		div.addEventListener("click", () => {
			workspaces.forEach((workspace) => {
				workspace.isSelected = false;
			});
			workspace.isSelected = true;
			renderWorkspaces();
		});
		workspacesDiv.appendChild(div);
	});
}

export { renderWorkspaces };
