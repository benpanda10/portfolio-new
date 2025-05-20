// DOM Elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const noTasksMessage = document.getElementById('no-tasks');
const clearAllButton = document.getElementById('clear-all');
const taskCountElement = document.getElementById('tasks-count');
const completedCountElement = document.getElementById('completed-count');
// Task Data Array
let tasks = [];
// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    // check if task is not empty
    if (taskText) 
    {
        // create a new task object
       
            const newTask = 
            {
                id:Date.now(), // generate a unique id using timestamp
                text: taskText,
                completed: false,
                createdAt: new Date().toISOString()
            }
    
    // Add task to array
    tasks.push(newTask)
    console.log(tasks)
    // Save to local storage
    saveTasks();

    // clear input
            taskInput.value = ''

    // Update UI
    renderTasks()
    }
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// load Tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks')

    if(savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

// Delete a task
function deleteTask(taskId) {
    // Filter out the task with the given ID
    tasks = tasks.filter(function(task) {
        return task.id !== taskId; 
    })

    // save updated task to locl storage
    saveTasks();

    // Update UI
    renderTasks();
}

// Toggle Task Completion
function toggleTaskCompletion(taskId) {
    // find the task in the array
    for (let i = 0 ; i<tasks.length ; i++) {
        if (tasks[i].id === taskId) {
            // toggle the completed status
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }

    // save updated tasks to local storage
    saveTasks();

    // Update UI
    renderTasks();
}

// render Task

function renderTasks() {
    taskList.innerHTML = ''
    // show/hide the no tasks messages

    if (tasks.length === 0) {
        noTasksMessage.style.display = 'block'
    }

    else {
        noTasksMessage.style.display = 'none'
    }

    // Create task elements

    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'task-item';

        // create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            // call toggleTaskCompletion(task.id)
            toggleTaskCompletion(task.id);
        });

        // Create Task Text Span
        const span = document.createElement('span')
        span.className = task.completed ? 'task-text completed' : 'task-text';
        span.textContent = task.text;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        });

        // Add elements to list item

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton)
        taskList.appendChild(li);
    });

    // update task counts
    updateTaskCounts()
}

// clear all tasks
function clearAllTasks() {
    // confirm before clearing
    if (tasks.length > 0) {
        const confirmed = confirm("Are you sure you want to delete all tasks?");

        if (confirmed) {
            tasks = [];
            saveTasks();
            renderTasks();
        }
    }
}

// function to update task counts
function updateTaskCounts() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(function(task) {
        return task.completed;
    }).length;
    taskCountElement.textContent = `Total : ${totalTasks} tasks`;
    completedCountElement.textContent = `Completed: ${completedTasks} tasks`
}

addButton.addEventListener('click', addTask)
clearAllButton.addEventListener('click', clearAllTasks)
taskInput.addEventListener('keypress', function(e) {
    // Add task when enter Enter key is pressed
    if (e.key === "Enter") {
        addTask()
    }
})
// initialize the app
loadTasks() 
