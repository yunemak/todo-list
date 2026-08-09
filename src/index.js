import "./style.css";
import { createTask } from "./js/createTask.js";
import { renderProjects } from "./js/renderProjects.js";
import { renderTasks } from "./js/renderTasks.js";
import "./js/projectManager.js";
import "./js/taskManager.js";
import { createProject } from "./js/projectUtils.js";

localStorage.setItem(
	"defaultProject",
	JSON.stringify(createProject("Default")),
);

renderProjects();
renderTasks(JSON.parse(localStorage.getItem("defaultProject")));
