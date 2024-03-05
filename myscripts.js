document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            toggleTask(e.target);
        }

        if (e.target.classList.contains('delete')) {
            deleteTask(e.target.parentElement);
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function toggleTask(li) {
        li.classList.toggle('completed');
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});
