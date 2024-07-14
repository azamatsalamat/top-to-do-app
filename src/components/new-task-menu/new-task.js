import newTaskHtml from './new-task.html';
import { Priorities } from '../../script/task';
import { createTask } from '../../script';

export function showNewTaskMenuDOM(){
    const newTaskMenu = document.getElementById('newTaskMenu');
    if (newTaskMenu.innerHTML == ''){
        newTaskMenu.innerHTML = newTaskHtml;

        const prioritySelect = document.getElementById('newTaskPriority');
        Object.entries(Priorities).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = key;
            prioritySelect.appendChild(option);
        });

        const cancelButton = document.getElementById('newTaskCancelButton');
        cancelButton.addEventListener('click', hideNewTaskMenuDOM);

        const form = document.getElementById('newTaskMenuForm');
        form.addEventListener('submit', createNewTask);
    }
}

function hideNewTaskMenuDOM(){
    const newTaskMenu = document.getElementById('newTaskMenu');
    newTaskMenu.innerHTML == '';
}

function createNewTask(event){
    event.preventDefault();

    const projectName = document.getElementById('project-title').textContent;
    const title = document.getElementById('newTaskText').value.trim();
    const desc = document.getElementById('newTaskDesc').value.trim();
    const deadline = document.getElementById('newTaskDeadline').value;
    const priority = document.getElementById('newTaskPriority').value;
    console.log(priority);
    createTask(projectName, title, desc, priority, deadline);
}