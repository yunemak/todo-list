import "./style.css";
import { createTask, addTask } from "./js/taskManager.js";
import "./js/sidebar.js";
import "./js/workspaceManager.js";

let task1 = createTask("Drink Water", "a", "23", "high");
addTask(task1);


