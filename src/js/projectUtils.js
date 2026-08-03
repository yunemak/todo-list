let projects = [];

function createProject(name) {
	let project = {
		name,
		taskList: [],
		id: crypto.randomUUID(),
	};
	addProject(project);
	return project;
}

/*
	Newly created project is automatically added to global projects
*/

function getProjects() {
	return [...projects];
}

function addProject(project) {
	projects.push(project);
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

export { createProject, getProjects, addProject, removeProject, removeTask };
