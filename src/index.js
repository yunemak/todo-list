import "./style.css";
import "./js/renderProjects.js";
import "./js/renderTasks.js";
import "./js/createTaskManager.js";
import "./js/projectUtils.js";
import "./js/projectManagerEvents.js";
import "./js/taskManagerEvents.js";
import { renderProjects } from "./js/renderProjects.js";
import { createProject } from "./js/projectUtils.js";
import { createTask } from "./js/taskUtils.js";
import { renderTasks } from "./js/renderTasks.js";
import {
	getLocalProjects,
	updateLocalStorage,
} from "./js/localStorageUtils.js";

renderProjects();

if (!localStorage.getItem("projects")) {
	let projects = getLocalProjects();

	let defaultProject = createProject("Default");
	defaultProject.taskList.push(
		createTask("Your very first task", "description", "2026-08-08", "low"),
	);

	defaultProject.isSelected = true;
	projects.push(defaultProject);

	updateLocalStorage(projects);

	renderProjects();
	renderTasks(defaultProject);
}
