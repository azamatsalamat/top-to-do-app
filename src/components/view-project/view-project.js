import viewProjectHtml from './view-project.html';
import { addNewTaskToDom } from '../new-task-menu/new-task';

export function showProjectTasks(project){
    const projectView = document.getElementsByClassName('projects-view')[0];
    projectView.innerHTML = '';

    projectView.insertAdjacentHTML('beforeend', viewProjectHtml);
    document.getElementById('project-title').textContent = project.title;
    project.tasks.forEach(task => {
        addNewTaskToDom(task);
    });
}