// Run after the document has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the Add Task button
    const addButton = document.getElementById('add-task-btn');

    // Select the task input field
    const taskInput = document.getElementById('task-input');

    // Select the unordered list to display tasks
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed input value
        const taskText = taskInput.value.trim();

        // Check if the task is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add event listener to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the button to the list item and the item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
