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
	body.appendChild(createTaskManager());
}

function createTaskManager() {
	let div = document.createElement("div");
	div.classList.add("task-manager");

	let closeBtn = document.createElement("button");
	closeBtn.classList.add("close-btn");
	closeBtn.textContent = "X";
	div.appendChild(closeBtn);

	div.appendChild(createTitle("Task Manager"));
	
	let form = document.createElement("form");
	form.appendChild(createInput("Title:", "text"));
	form.appendChild(createInput("Description:", "textarea"));

	div.appendChild(form);

	return div;
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

function createInput(label, type) {
	let div = document.createElement("div");
	div.classList.add("entry");
	let labelEl = document.createElement("label");
	labelEl.textContent = label;
	let inputEl;
	if (type === "textarea") {
		inputEl = document.createElement("textarea");
	}
	else {
		inputEl = document.createElement("input");
	}
	div.appendChild(labelEl);
	div.appendChild(inputEl);
	return div;	
}