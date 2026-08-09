function createTask(title, description, dueDate, priority) {
	let id = crypto.randomUUID();
	return { title, description, dueDate, priority, id };
}
/* 
Priority
1 - low
2 - medium
3 - high

*/

export { createTask };
