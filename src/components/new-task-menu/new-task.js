import newTaskHtml from './new-task.html';
import { Priorities } from '../../script/task';
import { createTask, getProjectByName } from '../../script';
import { showTaskDetails } from '../view-task/view-task';
import { showProjectTasks } from '../view-project/view-project';

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
    
    const task = createTask(projectName, title, desc, priority, deadline);

    addNewTaskToDom(task);
}

export function addNewTaskToDom(task){
    const tasksList = document.getElementById('tasks-list');
    const newTaskElement = document.createElement('li');

    const newTaskElementContent = document.createElement('span');
    newTaskElementContent.textContent = task.title;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(task);

    newTaskElement.appendChild(newTaskElementContent);
    newTaskElement.appendChild(deleteButton);

    newTaskElementContent.onclick = () => showTaskDetails(task);
    tasksList.appendChild(newTaskElement);
}

function deleteTask(task){
    const project = getProjectByName(document.getElementById('project-title').textContent);
    project.removeTask(task);
    showProjectTasks(project);
}