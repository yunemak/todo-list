import "./style.css";

const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const taskList = document.querySelector(".task-list");
const addTaskBtn = document.querySelector("#add-task-btn");

addTaskBtn.addEventListener("click", () => {
	openTaskManager();
});

let task1 = createTask("den", "a", "23", "low");
addTask(task1);



// functions

function openTaskManager() {
	mainContainer.style.filter =  "blur(10px)";
	
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
