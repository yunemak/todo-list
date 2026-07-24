import "./style.css";
import { createTask, addTask } from "./js/taskManager.js";
import "./js/sidebar.js";
import "./js/workspaceManager.js";

let task1 = createTask("den", "a", "23", "low");
addTask(task1);


