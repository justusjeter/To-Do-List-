document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskItem.addEventListener('click', function() {
                taskItem.classList.add('completed');
                setTimeout(function() {
                    taskItem.remove();
                }, 1000);
            });
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
});