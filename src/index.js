import "./style.css";

const taskList = document.querySelector(".task-list");


let task1 = createTask("den", "a", "23", "low");
renderTask(task1);



// functions

function createTask(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	}
};

function renderTask(task) {
	let div = document.createElement("div");
	div.classList.add("task");

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