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
            completed: false // Setter fullført-status til falsk som standard
        });
        taskInput.value = ""; // Tømmer inndatafeltet
        displayTasks(); // Viser oppgavene på nytt
    }
}
