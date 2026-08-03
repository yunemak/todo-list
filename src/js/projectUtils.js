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

function removeTask(project, id) {
	for (let i of projects) {
		if (i === project) {
			for (let task of i.taskList) {
				if (task.id === id) {
					// should delete here
				}
			}
		}
	}
}

export { createProject, getProjects, addProject, removeProject };
