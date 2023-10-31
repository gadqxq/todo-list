// Henter referanser til HTML-elementer ved hjelp av deres ID-er
const taskInput = document.getElementById("taskInput"); // Inndatafeltet for oppgaver
const addTaskButton = document.getElementById("addTaskButton"); // Knappen for å legge til oppgaver
const removeAllTasksButton = document.getElementById("removeAllTasksButton"); // Knappen for å fjerne alle oppgaver
const taskList = document.getElementById("taskList"); // Container for oppgavelisten
const taskStatus = document.getElementById("taskStatus"); // Statusmeldingen for oppgaver
let tasks = []; // Array for lagring av oppgaver

// Funksjon for å legge til en ny oppgave
function addTask() {
    const taskText = taskInput.value.trim(); // Henter oppgavetekst fra inndatafeltet og fjerner eventuell ekstra mellomrom
    if (taskText) {
        tasks.push({
            text: taskText, // Legger til oppgavetekst
            completed: false // Setter fullført-status til false som standard
        });
        taskInput.value = ""; // Tømmer inndatafeltet
        displayTasks(); // Viser oppgavene på nytt
    }
}

// Funksjon for å vise oppgavene i oppgavelisten
function displayTasks() {
    taskList.innerHTML = ""; // Tømmer oppgavelisten før oppdatering
    tasks.forEach((task, index) => {
        const taskBox = document.createElement("div"); // Oppretter en div for hver oppgave
        taskBox.className = "task-box"; // Legger til CSS-klasse for oppgaveboksen
        const taskItem = document.createElement("div"); // Oppretter en div for oppgaveelementet
        taskItem.className = "task-item"; // Legger til CSS-klasse for oppgaveelementet
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox" id="task${index}" ${task.completed ? "checked" : ""}>
            <label for="task${index}" class="${task.completed ? "completed-task" : ""}">${task.text}</label>
            <img class="delete-button" alt="x" src="./img/xmark-solid.svg" data-index="${index}">
        `; // Legger til HTML-innhold for oppgaveelementet
        taskBox.appendChild(taskItem); // Legger oppgaveelementet til oppgaveboksen
        taskList.appendChild(taskBox); // Legger oppgaveboksen til oppgavelisten
        // Legger til hendelseslyttere for sjekkboksen, sletteknappen og oppgaveelementet
        const checkbox = taskItem.querySelector(`#task${index}`);
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked; // Oppdaterer fullføringsstatus når sjekkboksen endres
            updateTaskStatus(); // Oppdaterer statusmeldingen
        });
        const deleteButton = taskItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const indexToDelete = event.target.getAttribute("data-index");
            deleteTask(indexToDelete); // Sletter oppgaven når sletteknappen klikkes
        });
        taskItem.addEventListener("click", () => {
            task.completed = !task.completed; // Bytter fullføringsstatus når oppgaveelementet klikkes
            updateTaskStatus(); // Oppdaterer statusmeldingen
        });
    });
    updateTaskStatus(); // Oppdaterer status for fullførte oppgaver
}
