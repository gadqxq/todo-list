const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

addTaskButton.addEventListener("click",e => {
    const task = taskInput.value;
    const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
})
