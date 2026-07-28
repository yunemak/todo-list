import trashBinImg from "./../assets/trash-bin.png";
import editImg from "./../assets/edit.png";

function addCheckBox(divShort) {
	let checkbox = document.createElement("input");
	checkbox.classList.add("checkbox-btn");
	checkbox.type = "checkbox";
	checkbox.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	divShort.appendChild(checkbox);
}

function addEditBtn(divShort) {
	let editBtn = createButton(createImg(editImg, "icon"), "edit-btn");
	editBtn.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	divShort.appendChild(editBtn);
}

function addDeleteBtn(divShort, task, workspace, containerDiv) {
	let deleteBtn = createButton(createImg(trashBinImg, "icon"), "delete-btn");
	deleteBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		workspace.taskList.splice(workspace.taskList.indexOf(task), 1);
		containerDiv.remove();
	});
	divShort.appendChild(deleteBtn);
}

function createButton(img, className) {
	let button = document.createElement("button");
	button.type = "button";
	button.classList.add(className);
	button.appendChild(img);
	return button;
}

function createImg(src, className) {
	let img = document.createElement("img");
	img.src = src;
	img.classList.add(className);
	return img;
}

export { addDeleteBtn, addCheckBox, addEditBtn };
