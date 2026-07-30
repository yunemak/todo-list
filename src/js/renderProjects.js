import { sideBar } from "./global.js";

function renderProjects() {
	let div = document.createElement("div");
	div.textContent = "deneme";
	sideBar.appendChild(div);
	return 0;
}

export { renderProjects };
