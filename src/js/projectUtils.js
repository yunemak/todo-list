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

function getProjects() {
	return [...projects];
}

function addProject(project) {
	projects.push(project);
}

function removeProject(project) {
	console.log("project removed!");
}

export { createProject, getProjects, addProject, removeProject };
