import "./style.css";
import { createTask } from "./js/createTask.js";
import { renderProjects } from "./js/renderProjects.js";
import { createProject, addProject, removeProject } from "./js/projectUtils.js";
import "./js/projectManager.js";

let myProject = createProject("My Project");
console.log(myProject);
myProject.taskList.push(createTask("task1"));
console.log(myProject);
createProject("asd");
createProject("deneme");

renderProjects();
