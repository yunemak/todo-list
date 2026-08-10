import { getLocalProjects, updateLocalStorage } from "./localStorageUtils.js";
import { renderProjects } from "./renderProjects.js";

let projects = getLocalProjects();

function createProject(name) {
	let project = {
		name,
		taskList: [],
		id: crypto.randomUUID(),
		isSelected: false,
	};
	addProject(project);
	selectProject(project);
	return project;
}

/*
	Newly created project is automatically added to global projects
*/

function getProjects() {
	return [...projects];
}

function addProject(project) {
	let projects = getLocalProjects();
	projects.push(project);
	updateLocalStorage(projects);
}

function removeProject(project) {
	let projects = getLocalProjects();
	projects.forEach((p) => {
		if (p.id === project.id) {
			projects.splice(projects.indexOf(p), 1);
		}
	});
	updateLocalStorage(projects);
	renderProjects();
}

function removeTask(projectId, taskId) {
	let projects = getLocalProjects();
	for (let project of projects) {
		if (project.id === projectId) {
			for (let task of project.taskList) {
				if (task.id === taskId) {
					project.taskList.splice(project.taskList.indexOf(task), 1);
				}
			}
		}
	}
	updateLocalStorage(projects);
}

function selectProject(project) {
	let projects = getLocalProjects();
	projects.forEach((p) => {
		p.isSelected = false;
		if (p.id === project.id) {
			p.isSelected = true;
		}
	});
	updateLocalStorage(projects);
}

export {
	createProject,
	getProjects,
	addProject,
	removeProject,
	removeTask,
	selectProject,
};
