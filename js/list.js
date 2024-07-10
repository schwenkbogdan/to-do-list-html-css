document.addEventListener("DOMContentLoaded", function() {
    loadTasks();

    document.getElementById("taskInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const taskText = event.target.value.trim();
            if (taskText) {
                addTask(taskText);
                event.target.value = "";
                saveTasks();
            }
        }
    });
});

function addTask(text, crossed = false) {
    const li = document.createElement("ul");
    const taskText = document.createTextNode(text);
    li.appendChild(taskText);

    if (crossed) {
        li.classList.add("crossed");
    }

    li.addEventListener("click", function() {
        li.classList.toggle("crossed");
        saveTasks();
    });

    const taskList = document.getElementById("taskList");
    taskList.insertBefore(li, taskList.firstChild);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(function(li) {
        tasks.push({ text: li.textContent, crossed: li.classList.contains("crossed") });
    });
    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
}

function loadTasks() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === "tasks") {
            const tasks = JSON.parse(value);
            tasks.forEach(task => addTask(task.text, task.crossed));
        }
    }
}
