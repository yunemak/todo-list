const addWorkspaceBtn = document.getElementById("add-workspace-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const sidebar = document.querySelector(".sidebar");

closeSidebarBtn.addEventListener("click", (e) => {
	sidebar.style.display = "none";
	openSidebarBtn.style.display = "inline";
});

openSidebarBtn.addEventListener("click", (e) => {
	sidebar.style.display = "flex";
	openSidebarBtn.style.display = "none";
});
