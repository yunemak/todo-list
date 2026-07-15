const mainContainer = document.querySelector(".main-container");
const taskList = document.querySelector(".task-list");
const addTaskBtn = document.querySelector("#add-task-btn");

function createTask(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	};
}

function addTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");
	div.textContent = task.title;
	taskList.appendChild(div);
}


export {mainContainer, addTaskBtn, createTask, addTask };