import "./style.css";
import { createTask, addTask } from "./js/taskManager.js";
import "./js/sidebar.js";
import "./js/workspaceManager.js";

let task1 = createTask("Drink Water", "You have to drink water to stay alive", "26-07-2026", "high");
addTask(task1);

let task2 = createTask("Eat Meal", "You have to eat to stay energytic", "26-07-2026", "medium");
addTask(task2);

let task3 = createTask("Eat Vegetable", "Eating vegatable is important to your health", "26-07-2026", "low");
addTask(task3);
