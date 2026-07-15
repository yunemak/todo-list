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


	div.appendChild(createCloseBtn());
	div.appendChild(createTitle("Task Manager"));
	
	let form = document.createElement("form");
	form.appendChild(createInput("Title:", "text"));
	form.appendChild(createInput("Description:", "textarea"));
	form.appendChild(createInput("Due Date:", "date"));
	form.appendChild(createPriority());

	div.appendChild(form);

	return div;
}

function createCloseBtn() {
	let closeBtn = document.createElement("button");
	closeBtn.classList.add("close-btn");
	closeBtn.textContent = "X";
	
	return closeBtn;
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

function createCheckbox() {
	let check = document.createElement("button");

	check.type = "checkbox";
	return check;
}



function createPriority() {
	let mainDiv = document.createElement("div");
	mainDiv.classList.add("priority");
	let labelEl = document.createElement("label");
	labelEl.textContent = "Priority:";
	mainDiv.appendChild(labelEl);

	let divPriority = document.createElement("div");
	mainDiv.appendChild(divPriority);

	let priority = ["low", "intermediate", "high"];

	for (let el in priority) {
		let div = document.createElement("div");
		let label = document.createElement("label");
		label.textContent = priority[el];
		label.htmlFor = el;
		let radio = document.createElement("button");
		radio.type = "radio";
		radio.id = el;
		div.appendChild(label);
		div.appendChild(radio);
		divPriority.appendChild(div);
	}


	return mainDiv;
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
		inputEl.type = type;
	}
	div.appendChild(labelEl);
	div.appendChild(inputEl);
	return div;	
}