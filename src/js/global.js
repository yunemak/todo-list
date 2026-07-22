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

	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	div.appendChild(checkbox);
	
	let priority = document.createElement("p");
	// Make color later
	priority.textContent = task.priority;
	div.appendChild(priority);


	let h3 = document.createElement("h3");
	h3.textContent = task.title;
	div.appendChild(h3);

	
	let dueDate = document.createElement("div");
	dueDate.textContent = task.dueDate;
	div.appendChild(dueDate);


	taskList.appendChild(div);
}

export { mainContainer, addTaskBtn, createTask, addTask };
