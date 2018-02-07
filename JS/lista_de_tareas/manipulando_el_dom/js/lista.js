var newTask = document.getElementById("new-task");
var taskList = document.getElementById("task-list");

function addTask(e){
  e.preventDefault();
  if(e.which === 13){
    var newTaskE1 = document.createElement("li");
    var newTask = document.createElement("span");
    var newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTask.textContent = this.value;
    newTaskE1.appendChild(newTaskCheckbox);
    newTaskE1.appendChild(newTask);
    taskList.appendChild(newTaskE1);
    this.value = "";
  }
}

newTask.addEventListener("keyup", addTask);