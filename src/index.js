import "./style.css";
import { createTask } from "./js/createTask.js";
import { renderProjects } from "./js/renderProjects.js";
import { renderTasks } from "./js/renderTasks.js";
import "./js/projectManager.js";
import "./js/taskManager.js";

renderProjects();
renderTasks(myProject);
