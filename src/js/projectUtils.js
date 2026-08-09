import { getLocalProjects, updateLocalStorage } from "./localStorageUtils.js";

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
	console.log("project removed!");
}

function removeTask(projectId, taskId) {
	for (let project of projects) {
		if (project.id === projectId) {
			for (let task of project.taskList) {
				if (task.id === taskId) {
					project.taskList.splice(project.taskList.indexOf(task), 1);
				}
			}
		}
	}
}

function selectProject(project) {
	let projects = getLocalProjects();
	projects.forEach((p) => {
		p.isSelected = false;
		if (p.id === project.id) {
			p.isSelected = true;
		}
	});
	console.log(projects);
	updateLocalStorage(projects);
	console.log(getLocalProjects());
}

export {
	createProject,
	getProjects,
	addProject,
	removeProject,
	removeTask,
	selectProject,
};
