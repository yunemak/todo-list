import { addProjectButton } from "./global.js";
import { setBackgroundDisabled } from "./managerCommon.js";
import { createProjectManager } from "./createProjectManager.js";

addProjectButton.addEventListener("click", () => {
	setBackgroundDisabled(true);
	createProjectManager();
});

