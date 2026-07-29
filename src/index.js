import "./style.css";
import { createTask } from "./js/createTask.js";
import { createProject } from "./js/createProject.js";

let myProject = createProject("My Project");
console.log(myProject);
myProject.taskList.push(createTask("task1"));
console.log(myProject);
