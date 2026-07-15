import "./style.css";

const taskList = document.querySelector(".task-list");
const addTaskBtn = document.querySelector("#add-task-btn");

addTaskBtn.addEventListener("click", () => {
	openTaskManager();
});

let task1 = createTask("den", "a", "23", "low");
addTask(task1);



// functions

function openTaskManager() {
	let div = document.createElement("div");
	div.classList.add("task-manager");
	div.textContent = "deneme";
	taskList.appendChild(div);
}

function createTask(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	}
};

function addTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");

	div.appendChild(createCheckbox());
	div.appendChild(createTitle(task.title));

	taskList.appendChild(div);
}

function createTitle(title) {
	let h3 = document.createElement("h3");
	h3.textContent = title;
	return h3;
}

function createDescription(description) {

}

function createDueDate(dueDate) {

}

function createPriority(priority) {

}

function createCheckbox() {
	let check = document.createElement("button");

	check.type = "checkbox";
	return check;
}