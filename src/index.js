import "./style.css";
import { createTask, addTask } from "./js/taskManager.js";
import "./js/sidebar.js";
import "./js/workspaceManager.js";

let task1 = createTask("Drink Water", "You have to drink water to stay alive", "26-07-2026", "high");
addTask(task1);


